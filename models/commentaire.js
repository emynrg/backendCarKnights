import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CommentaireSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  post_id: { type: Schema.Types.ObjectId, ref: "Post" },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  
});

export default model("Commentaire", CommentaireSchema);
