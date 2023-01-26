import express from "express";

import {
  getCarById,
  getAllCar,
  addCar,
  updateCar,
} from "../controllers/car.js";
import multer from "../middlewares/multer-config.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.get(auth,getAllCar)
.post(
  auth,
  // Utiliser multer
  multer,
  addCar
);

router.route("/:_id").put(multer, updateCar).get(getCarById);

export default router;