import mongoose from "mongoose";
const { Schema, model } = mongoose;

const likecomSchema = new Schema({
  com_id: { type: Schema.Types.ObjectId, ref: "Commentaire" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model("LikeCom", likecomSchema);
