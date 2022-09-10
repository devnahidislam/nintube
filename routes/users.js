import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
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

// Subscribe a user
router.put('/sub/:id', subscribe);

// UnSubscribe a user
router.put('/unsub/:id', UnSubscribe);

// Like a video
router.put('/like/:videoId', like);

// Dislike a video
router.put('/dislike/:videoId', dislike);
