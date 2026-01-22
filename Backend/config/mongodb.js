import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected sucessfully");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
