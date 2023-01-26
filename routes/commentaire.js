import express from "express";

import {
  getAll,
  addOne,
  putAll,
  getOne,
  patchOne,
  deleteOne,
} from "../controllers/commentaire.js";
const router = express.Router();

router.route("/").get(getAll).post(addOne);

router.route("/:_id").put(putAll).get(getOne).patch(patchOne).delete(deleteOne);

export default router;
