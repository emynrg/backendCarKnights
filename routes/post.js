import express from "express";

import {
  getAllPostByIdUser,
  getPostById,
  getAll,
  addOne,
  putAll,
  deleteOne,
} from "../controllers/post.js";
import multer from "../middlewares/multer-post-config.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.route("/:userId").get(getAllPostByIdUser);

router.route("/").get(getAll).post(auth, multer, addOne);

router
  .route("/:_id")
  .put(multer, putAll)
  .get(getPostById)
  .delete(auth, deleteOne);

export default router;