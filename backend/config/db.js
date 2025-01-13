import dotenv from 'dotenv'; // Import dotenv for environment variables
import 'dotenv/config'; // Load environment variables from .env file
import { Pool } from 'pg'; // PostgreSQL pool for database connections

console.log("DATABASE_URL:", process.env.DATABASE_URL);


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // from .env file
});


export default pool; 
