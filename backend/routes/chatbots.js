import express from 'express';
import { verifyToken } from '../middleware/auth.js'; 
import {
    allocateChatbotsToUser,
    fetchChatbots

} from '../controllers/chatbotController.js';

const router = express.Router();
router.post('/allocate', verifyToken, allocateChatbotsToUser);
router.get('/', verifyToken, fetchChatbots); // Route to fetch chatbots

export default router;

