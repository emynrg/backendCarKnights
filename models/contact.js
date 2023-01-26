import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ContactSchema = new Schema({
  user1: { type: Schema.Types.ObjectId, ref: "User", required: true },

  user2: { type: Schema.Types.ObjectId, ref: "User", required: true },

  match: {
    type: Boolean,
    default: null,
  },
});

export default model("Contact", ContactSchema);