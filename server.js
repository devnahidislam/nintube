import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

import cors from 'cors';
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import videoRoute from './routes/videos.js';
import commentRoute from './routes/comments.js';

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/videos', videoRoute);
app.use('/api/comments', commentRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || 'Something went wrong.';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
