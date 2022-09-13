import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
  getAllUsers,
  like,
  subscribe,
  UnSubscribe,
  update,
} from '../controllers/user.js';
import { verifyToken } from './../utils/verifyToken.js';

const router = express.Router();

export default router;

// Update user
router.put('/:id', verifyToken, update);

// Delete user
router.delete('/:id', verifyToken, deleteUser);

// Get user
router.get('/find/:id', getUser);

// Get all user
router.get('/all', verifyToken, getAllUsers);

// Subscribe a user
router.put('/sub/:id', verifyToken, subscribe);

// UnSubscribe a user
router.put('/unsub/:id', verifyToken, UnSubscribe);

// Like a video
router.put('/like/:videoId', verifyToken, like);

// Dislike a video
router.put('/dislike/:videoId', verifyToken, dislike);
