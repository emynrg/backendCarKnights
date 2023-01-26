import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  EventName: {
    type: String,
    required: true,
  },
  EventDescription: {
    type: String,
    required: true, 
    

  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Event", eventSchema);