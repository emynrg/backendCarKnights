import mongoose from "mongoose";
const { Schema, model } = mongoose;

const carSchema = new Schema({
  marque: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true, 
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Car", carSchema);