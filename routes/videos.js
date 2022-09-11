import express from 'express';
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  getAllVideo,
  randomVideo,
  subscribedVideos,
  trendVideo,
  updateVideo,
  getByTag,
  search,
} from '../controllers/video.js';
import { verifyToken } from './../utils/verifyToken.js';

const router = express.Router();

// Create a video
router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.get('/find/:id', getAllVideo);
router.put('/view/:id', addView);
router.get('/trend', trendVideo);
router.get('/random', randomVideo);
router.get('/subsc', verifyToken, subscribedVideos);
router.get('/tags', getByTag);
router.get('/search', search);
export default router;
