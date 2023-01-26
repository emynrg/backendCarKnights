import mongoose from "mongoose";
const { Schema, model } = mongoose;

const likepostSchema = new Schema({
  post_id: { type: Schema.Types.ObjectId, ref: "Post" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model("LikePost", likepostSchema);
