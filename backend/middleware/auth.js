import jwt from 'jsonwebtoken';

// Function to generate a JWT token
export const generateToken = (user) => {
  console.log("User object for token generation:", user);
  return jwt.sign(
    { id: user.user_id, email: user.email }, // Updated payload data to use user_id
    process.env.JWT_SECRET, // Your secret key
    { expiresIn: '1h' } // Token expiration time
  );
};

// Middleware to verify the token
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; 
  console.log('Generated token:', token); 
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log('Decoded token:', decoded); 
    req.user = decoded; 
    next();
  });
};
