import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: ture,
    },
    title: {
      type: String,
      required: ture,
    },
    desc: {
      type: String,
      required: ture,
    },
    imgUrl: {
      type: String,
      required: ture,
    },
    videoUrl: {
      type: String,
      required: ture,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Video', VideoSchema);
