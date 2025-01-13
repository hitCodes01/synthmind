import pkg from 'pg'; // PostgreSQL pool for database connections
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
// Get the current subscription details for a user
const getCurrentSubscription = async (req, res) => {
    const userId = req.user.id; // Extract userId from the decoded token

    try {
        // Fetch the user's current subscription plan
        const userPlan = await pool.query(
            `SELECT subscription_plan_id FROM users WHERE user_id = $1`, [userId]
        );

        if (userPlan.rows.length === 0 || !userPlan.rows[0].subscription_plan_id) {
            return res.status(404).json({ message: 'User has no active subscription' });
        }

        const subscriptionPlanId = userPlan.rows[0].subscription_plan_id;

        // Fetch subscription details based on the subscription_plan_id
        const subscriptionDetails = await pool.query(
            `SELECT sp.name AS plan_name, ss.plan_name AS subplan_name 
             FROM subscription_plan sp 
             JOIN subscription_subplans ss ON sp.id = ss.subscription_plan_id 
             WHERE ss.id = $1`, [subscriptionPlanId]
        );

        if (subscriptionDetails.rows.length === 0) {
            return res.status(404).json({ message: 'Subscription details not found' });
        }

        return res.status(200).json({ subscription: subscriptionDetails.rows[0] });
    } catch (error) {
        console.error('Error fetching current subscription:', error);
        return res.status(500).json({ message: 'Error fetching current subscription' });
    }
};

// Create a new subscription
// Create a new subscription
const createSubscription = async (req, res) => {
    console.log('Decoded user from token:', req.user);
    console.log('Request body:', req.body);

    const { plan } = req.body; // Expecting plan in the request body
    const userId = req.user.id; // Extract userId from the decoded token

    // Log userId and plan for debugging
    console.log('User ID:', userId);
    console.log('Plan:', plan);

    // Validate input
    if (!plan) {
        return res.status(400).json({ message: 'Plan name is required' });
    }

    try {
        // Check if the subplan exists
        const subplanCheck = await pool.query(
            `SELECT id, subscription_plan_id FROM subscription_subplans WHERE LOWER(TRIM(plan_name)) = LOWER(TRIM($1))`, 
            [plan]
        );

        // Log the result for debugging
        console.log('Subplan Check Result:', subplanCheck.rows);

        // Check if subplan was found
        if (subplanCheck.rows.length === 0) {
            return res.status(404).json({ message: 'Subplan not found' });
        }

        const subplanId = subplanCheck.rows[0].id; // Get the subplan ID
        const subscriptionPlanId = subplanCheck.rows[0].subscription_plan_id; // Get the main plan ID

        // Check if the user already has a subscription
        const userCheck = await pool.query(
            `SELECT subscription_plan_id, subplan_id FROM users WHERE user_id = $1`, 
            [userId]
        );

        // Check if user has a subscription
        if (userCheck.rows.length > 0 && userCheck.rows[0].subscription_plan_id) {
            return res.status(400).json({ message: 'User already has a subscription' });
        }

        // Assign the user to the selected main plan and subplan
        await pool.query(
            `UPDATE users SET subscription_plan_id = $1, subplan_id = $2 WHERE user_id = $3`, 
            [subscriptionPlanId, subplanId, userId]
        );

        // Respond with a success message
        return res.status(201).json({ message: 'Subscription created successfully', subplanId });
    } catch (error) {
        console.error('Error creating subscription:', error);
        return res.status(500).json({ message: 'Error creating subscription' });
    }
};


// Upgrade an existing subscription
// Upgrade subscription: move to another plan (same or different category/tier)
// Upgrade an existing subscription
const upgradeSubscription = async (req, res) => {
    const { plan } = req.body;  // New plan passed in the request body
    const userId = req.user.id; // User ID from authentication

    if (!plan) {
        return res.status(400).json({ message: 'New plan name is required' });
    }

    try {
        // Fetch current user's subscription details
        const userPlan = await pool.query(
            `SELECT subscription_plan_id, subplan_id FROM users WHERE user_id = $1`, [userId]
        );

        if (userPlan.rows.length === 0 || !userPlan.rows[0].subscription_plan_id) {
            return res.status(404).json({ message: 'User has no active subscription' });
        }

        const currentSubplanId = userPlan.rows[0].subplan_id;
        const currentPlanId = userPlan.rows[0].subscription_plan_id;

        // Check if the new subplan exists
        const newSubplanCheck = await pool.query(
            `SELECT id, subscription_plan_id FROM subscription_subplans WHERE plan_name = $1`, [plan]
        );

        if (newSubplanCheck.rows.length === 0) {
            return res.status(404).json({ message: 'New plan not found' });
        }

        const newPlan = newSubplanCheck.rows[0];
        const newSubplanId = newPlan.id;
        const newSubscriptionPlanId = newPlan.subscription_plan_id;

        if (currentSubplanId === newSubplanId) {
            return res.status(400).json({ message: 'You are already subscribed to this subplan' });
        }

        // Perform the upgrade (update subscription plan and subplan)
        await pool.query(
            `UPDATE users SET subscription_plan_id = $1, subplan_id = $2 WHERE user_id = $3`, 
            [newSubscriptionPlanId, newSubplanId, userId]
        );

        return res.status(200).json({ message: 'Subscription upgraded successfully' });
    } catch (error) {
        console.error('Error upgrading subscription:', error);
        return res.status(500).json({ message: 'Error upgrading subscription' });
    }
};



// Downgrade an existing subscription
// Downgrade subscription: switch to a lower plan
// Downgrade an existing subscription
const downgradeSubscription = async (req, res) => {
    const { plan } = req.body; // New plan passed in the request body
    const userId = req.user.id; // User ID from authentication

    if (!plan) {
        return res.status(400).json({ message: 'New plan name is required' });
    }

    try {
        // Fetch current user's subscription details
        const userPlan = await pool.query(
            `SELECT subscription_plan_id, subplan_id FROM users WHERE user_id = $1`, [userId]
        );

        if (userPlan.rows.length === 0 || !userPlan.rows[0].subscription_plan_id) {
            return res.status(404).json({ message: 'User has no active subscription' });
        }

        const currentSubplanId = userPlan.rows[0].subplan_id;
        const currentPlanId = userPlan.rows[0].subscription_plan_id;

        // Check if the new subplan exists
        const newSubplanCheck = await pool.query(
            `SELECT id, subscription_plan_id FROM subscription_subplans WHERE plan_name = $1`, [plan]
        );

        if (newSubplanCheck.rows.length === 0) {
            return res.status(404).json({ message: 'New plan not found' });
        }

        const newPlan = newSubplanCheck.rows[0];
        const newSubplanId = newPlan.id;
        const newSubscriptionPlanId = newPlan.subscription_plan_id;

        if (currentSubplanId === newSubplanId) {
            return res.status(400).json({ message: 'You are already subscribed to this subplan' });
        }

        // Perform the downgrade (update subscription plan and subplan)
        await pool.query(
            `UPDATE users SET subscription_plan_id = $1, subplan_id = $2 WHERE user_id = $3`, 
            [newSubscriptionPlanId, newSubplanId, userId]
        );

        return res.status(200).json({ message: 'Subscription downgraded successfully' });
    } catch (error) {
        console.error('Error downgrading subscription:', error);
        return res.status(500).json({ message: 'Error downgrading subscription' });
    }
};

// Cancel a subscription
// Cancel subscription: remove the current subscription
const cancelSubscription = async (req, res) => {
    const userId = req.params.userId; // Get user ID from request parameters

    try {
        // Check if the user has an active subscription
        const subscriptionCheck = await pool.query(
            `SELECT subscription_plan_id FROM users WHERE user_id = $1`, [userId]
        );

        if (subscriptionCheck.rows.length === 0 || !subscriptionCheck.rows[0].subscription_plan_id) {
            return res.status(404).json({ message: 'No active subscription found for this user' });
        }

        // Perform the cancellation (set subscription_plan_id to NULL or delete as per your requirement)
        await pool.query(
            `UPDATE users SET subscription_plan_id = NULL WHERE user_id = $1`, [userId]
        );

        return res.status(200).json({ message: 'Subscription canceled successfully' });
    } catch (error) {
        console.error('Error canceling subscription:', error);
        return res.status(500).json({ message: 'Error canceling subscription' });
    }
};
const fetchPlanPrice = async (req, res) => {
    const { main, sub } = req.query; // Extracting main and sub from query
    const subPlanName = `${main} - ${sub}`.trim(); // Adjust to include spaces

    // Log the parameters
    console.log("Querying for main:", main, "and sub plan name:", subPlanName); 

    try {
        const priceQuery = await pool.query(
            `SELECT ss.price_per_month 
             FROM subscription_plan sp 
             JOIN subscription_subplans ss ON sp.id = ss.subscription_plan_id 
             WHERE sp.name = $1 AND ss.plan_name = $2`, 
             [main, subPlanName]
        );

        console.log("Query results:", priceQuery.rows); 

        if (priceQuery.rows.length === 0) {
            return res.status(404).json({ message: 'Plan price not found' });
        }

        const price = priceQuery.rows[0].price_per_month;
        return res.status(200).json({ price });
    } catch (error) {
        console.error('Error fetching plan price:', error);
        return res.status(500).json({ message: 'Error fetching plan price' });
    }
};

// Export the functions
export { createSubscription, upgradeSubscription, downgradeSubscription, cancelSubscription, getCurrentSubscription, fetchPlanPrice };
