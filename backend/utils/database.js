
import mongoose from "mongoose"

import dotenv from 'dotenv';

dotenv.config();


const databaseConnection = async () => {
    try {
        const uri = process.env.MONGO_URL;
        if (!uri) {
          throw new Error('MONGODB_URI is not defined in environment variables');
        }
        await mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
      } catch (error) {
        console.error('Error connecting to database', error);
        process.exit(1);
      }
}

export default databaseConnection