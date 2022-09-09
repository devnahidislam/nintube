import mongoose from 'mongoose';

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connection SUCCESS');
  } catch (error) {
    console.error('MongoDB Connection FAILED');
    process.exit(1);
  }
};
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected...');
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection Failed...');
});

export default connectDB;
