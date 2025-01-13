import dotenv from 'dotenv';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pkg from 'pg'; // PostgreSQL pool for database connections
const { Pool } = pkg;

import userRoutes from './routes/users.js';
import subscriptionRoutes from './routes/subscription.js'; 
import chatbotsRoutes from './routes/chatbots.js';
import { verifyToken } from './middleware/auth.js'; 

const app = express();

console.log('DATABASE_URL:', process.env.DATABASE_URL);
if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set');
    process.exit(1); 
}

// CORS Configuration (Allow requests only from local development)
const corsOptions = {
  origin: [
    'http://localhost:5173',  // Development URL
    process.env.CLIENT_URL     // Production URL from environment variable
  ],
  optionsSuccessStatus: 200,  // Set the status for successful OPTIONS requests
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});

// Test route to check database connection
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Simple query to check the connection
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Database connection error:', error.message || error);
    res.status(500).send('Database connection error');
  }
});

// User routes
app.use('/api/users', userRoutes);

// Subscription routes
app.use('/api/subscription', subscriptionRoutes); // Add the subscription routes
app.use('/api/chatbots', chatbotsRoutes);

// Error handling middleware for unhandled routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
