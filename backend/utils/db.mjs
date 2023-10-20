import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://Rk10701:Rk10701@cluster0.97jhclj.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Export the mongoose connection so it can be used in other parts of your application
export default mongoose.connection;
