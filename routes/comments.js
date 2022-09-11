import express from 'express';
import {
  addComment,
  deleteComment,
  getComment,
} from '../controllers/comment.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();
// Add Comment
router.post('/', verifyToken, addComment);
// Delete Comment
router.delete('/:id', verifyToken, deleteComment);
// Get comments
router.get('/:videoId', getComment);

export default router;
