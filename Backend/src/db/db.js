import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB!");
  } catch (error) {
    console.log("Faied to connect Database", error);
  }
};

export default connectDB;