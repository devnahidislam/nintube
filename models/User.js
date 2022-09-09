import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
      unique: true,
    },
    email: {
      type: String,
      required: ture,
      unique: true,
    },
    password: {
      type: String,
      required: ture,
    },
    img: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
