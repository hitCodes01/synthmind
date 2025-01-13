import dotenv from 'dotenv';
import pkg from 'pg'; 
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL successfully');
    client.release();
  } catch (error) {
    console.error('Connection error:', error);
  }
};

testConnection();
