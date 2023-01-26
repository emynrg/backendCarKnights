import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
  titre: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imagePost: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Post", postSchema);