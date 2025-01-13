import express from 'express';
import { verifyToken } from '../middleware/auth.js'; 
import {
  signUpUser,
  getAllUsers,
  getCurrentUserData,
  updateUser,
  deleteUser,
  signInUser,
  changePassword,
  updateProfile
} from '../controllers/userController.js'; 

const router = express.Router();

// 1. **Create** (SignUp/Register User)
router.post('/signup', signUpUser);

// 2. **Read** (Get all users or a specific user by ID)

router.get('/', verifyToken, getAllUsers);
router.get('/:user_id', verifyToken, getCurrentUserData); 

// 3. **Update** (Update user information)
router.put('/:user_id', verifyToken, updateUser); 

// 4. **Delete** (Remove a user)
router.delete('/:user_id', verifyToken, deleteUser); 

// 5. **Sign In** (Authenticate User)
router.post('/signin', signInUser); // Add the sign-in route
router.get('/current', verifyToken, getCurrentUserData); 
router.put('/profile/change-password', verifyToken, changePassword);
router.put('/profile/update-profile', verifyToken, updateProfile);

export default router;
