import express from "express";

import { getAll, addOne, getOne, deleteOne } from "../controllers/like_com.js";
const router = express.Router();

router.route("/").get(getAll).post(addOne);

router.route("/:_id").get(getOne).delete(deleteOne);

export default router;
