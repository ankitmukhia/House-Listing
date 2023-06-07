import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("its an error");
  }
};

export default mongoDB;
