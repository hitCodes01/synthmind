import pkg from 'pg'; // PostgreSQL pool for database connections
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
const fetchChatbots = async (req, res) => {
    try {
      const response = await pool.query(`SELECT chatbot_id, chatbot_name FROM chatbots`); // Adjust your query as needed
      res.status(200).json({ chatbots: response.rows });
    } catch (error) {
      console.error('Error fetching chatbots:', error);
      res.status(500).json({ message: 'Error fetching chatbots' });
    }
  };
  

  
  const allocateChatbotsToUser = async (req, res) => {
    const { selectedChatbots } = req.body; // Expecting selectedChatbots to be an array of chatbot IDs
    const userId = req.user.id; // Assuming you have user authentication in place

    try {
        // Fetch user's subplan_id and max_chatbots using a single query
        const subscriptionPlan = await pool.query(
            `SELECT ss.id AS subplan_id, ss.max_chatbots 
             FROM users u 
             INNER JOIN subscription_subplans ss ON u.subplan_id = ss.id 
             WHERE u.user_id = $1`, 
            [userId]
        );

        if (subscriptionPlan.rows.length === 0) {
            return res.status(404).json({ message: 'User not found or no subscription details available' });
        }

        const subplanId = subscriptionPlan.rows[0].subplan_id;
        const maxChatbots = subscriptionPlan.rows[0].max_chatbots;

        // Validate chatbot selection
        if (selectedChatbots.length > maxChatbots) {
            return res.status(400).json({ message: `You can select a maximum of ${maxChatbots} chatbots for your current plan` });
        }

        // Delete any previous allocations for this user (if re-selecting chatbots)
        await pool.query(
            `DELETE FROM user_chatbot_allocations WHERE user_id = $1 AND subscription_plan_id = $2`, 
            [userId, subplanId]
        );

        // Insert the selected chatbots into the user_chatbot_allocations table
        const chatbotAllocationQueries = selectedChatbots.map(chatbotId => {
            return pool.query(
                `INSERT INTO user_chatbot_allocations (user_id, chatbot_id, subscription_plan_id) 
                 VALUES ($1, $2, $3)`, 
                [userId, chatbotId, subplanId]
            );
        });

        // Execute all insert queries
        await Promise.all(chatbotAllocationQueries);

        return res.status(201).json({ message: 'Chatbot allocation successful', selectedChatbots });
    } catch (error) {
        console.error('Error allocating chatbots:', error.message);
        
        // Handle specific errors
        if (error.code === '23503') { // Foreign key violation
            return res.status(400).json({ message: 'One or more selected chatbots are invalid or not allowed' });
        } else if (error.code === '23505') { // Unique violation
            return res.status(400).json({ message: 'Duplicate allocation attempted' });
        } else if (error.message.includes('invalid input syntax for type integer')) {
            return res.status(400).json({ message: 'Invalid chatbot ID format provided' });
        }

        // General error response
        return res.status(500).json({ message: 'Error allocating chatbots, please try again' });
    }
};


export {allocateChatbotsToUser, fetchChatbots};