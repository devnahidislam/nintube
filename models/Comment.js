import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: ture,
    },
    videoId: {
      type: String,
      required: ture,
    },
    desc: {
      type: String,
      required: ture,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', CommentSchema);
