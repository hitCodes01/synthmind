import bcrypt from 'bcrypt'; // To hash passwords
import pkg from 'pg'; // PostgreSQL pool for database connections
const { Pool } = pkg;
import jwt from 'jsonwebtoken';
import { generateToken } from '../middleware/auth.js'; // Importing the generateToken function

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Function to sign up a user
export const signUpUser = async (req, res) => {
  console.log('Connecting to database with URL:', process.env.DATABASE_URL);

  const { name, email, password } = req.body; // Changed name to username

  console.log("Password before hashing:", password);
  console.log("Is password a string?", typeof password === 'string'); // Should log true

  if (typeof password !== 'string' || !password) {
    return res.status(400).json({ message: 'Invalid password type or empty password' });
  }

  try {
    console.log('Inside the try block');
    
    // Test database connection
    await pool.query('SELECT 1'); // Simple test query

    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password after hashing:', hashedPassword);

    const newUser = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    );

    // Generate token for the new user
    const token = generateToken({ user_id: newUser.rows[0].user_id, email: newUser.rows[0].email });

    // Return user data excluding password
    const { password_hash, ...userData } = newUser.rows[0];
    res.status(201).json({ user: userData, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to sign in a user
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token for the user
    const token = generateToken({ user_id: user.user_id, email: user.email });

    // Return user data excluding password
    const { password_hash, ...userData } = user;
    res.status(200).json({ user: userData, token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to retrieve all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query('SELECT user_id, username, email FROM users');
    res.status(200).json(users.rows);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to retrieve a user by ID
export const getCurrentUserData = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the verified token
    console.log('Fetching current user data for ID:', userId);

    const user = await pool.query('SELECT user_id, username, email FROM users WHERE user_id = $1', [userId]);
    console.log('User query result:', user.rows); // Log the result of the query

    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.rows[0]); // Respond with the user's data
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Function to update a user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    let hashedPassword = null;

    // Check if password is provided and hash it
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Build the update query dynamically
    const updates = [];
    const values = [];

    if (username) {
      updates.push(`username = $${updates.length + 1}`);
      values.push(username);
    }
    if (email) {
      updates.push(`email = $${updates.length + 1}`);
      values.push(email);
    }
    if (hashedPassword) {
      updates.push(`password_hash = $${updates.length + 1}`);
      values.push(hashedPassword);
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'No data provided to update.' });
    }

    const updateQuery = `UPDATE users SET ${updates.join(', ')} WHERE user_id = $${updates.length + 1} RETURNING *`;
    values.push(id);

    const updatedUser = await pool.query(updateQuery, values);

    if (updatedUser.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return updated user data excluding password
    const { password_hash, ...updatedUserData } = updatedUser.rows[0];
    res.status(200).json(updatedUserData);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Function to change user password
export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id; // Extract user ID from the token

  try {
    // Find the user by ID
    const userResult = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare current password with the hashed password in the database
    const isMatch = await bcrypt.compare(currentPassword, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password in the database
    await pool.query('UPDATE users SET password_hash = $1 WHERE user_id = $2', [hashedNewPassword, userId]);

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Function to update user profile (name and email)
export const updateProfile = async (req, res) => {
  const { username, email } = req.body; // Get new username and email from request body
  const userId = req.user.id; // Get the user ID from the token (assuming token contains user info)

  try {
    // Check if email already exists for a different user
    const emailExists = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND user_id != $2',
      [email, userId]
    );
    if (emailExists.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use by another user' });
    }

    // Update user's username and email in the database
    const updatedUser = await pool.query(
      'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING user_id, username, email',
      [username, email, userId] // Ensure the correct variable names are used here
    );

    // Check if user was found and updated
    if (updatedUser.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with updated user details
    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser.rows[0] });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Function to delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id]);

    if (deletedUser.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
