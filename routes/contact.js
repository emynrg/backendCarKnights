import express from "express";

import {
  getAll,
  addOne,
  getOne,
  deleteOne,
  getAllContactByIdUser,
} from "../controllers/contact.js";
const router = express.Router();
import auth from "../middlewares/auth.js";

router.route("/cont").get(auth, getAllContactByIdUser);

router.route("/:user2").get(getAll).post(auth, addOne);

router.route("/").get(getAll);

router.route("/:_id").get(getOne).delete(deleteOne);

export default router;