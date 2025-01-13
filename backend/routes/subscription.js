import express from 'express';
import {
    getCurrentSubscription,
    createSubscription,
    upgradeSubscription,
    downgradeSubscription,
    cancelSubscription,
    fetchPlanPrice
} from '../controllers/subscriptionController.js';
import { verifyToken } from '../middleware/auth.js'; 

const router = express.Router();


router.get('/plans', verifyToken, fetchPlanPrice);
// Route to fetch plan price
router.get('/plans/:mainPlan/:subPlan', verifyToken, fetchPlanPrice);
router.post('/users/:userId/subscriptions', verifyToken, createSubscription);
router.put('/users/:userId/subscriptions/upgrade', verifyToken, upgradeSubscription);
router.put('/users/:userId/subscriptions/downgrade', verifyToken, downgradeSubscription);
router.delete('/users/:userId/subscriptions', verifyToken, cancelSubscription);

export default router;
