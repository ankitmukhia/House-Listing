import mongoose, { Schema } from "mongoose";

const HouseSchema = new Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  homeType: String,
  description: String,
  price: { type: Number, required: true },
  image: String,
  yearBuilt: Number,
});

const House = mongoose.model("House", HouseSchema);

export default House;
