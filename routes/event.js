import express from "express";
import {
    addpost,
    getEventById,
    deleteOnce,
   
  } from "../controllers/event.js";
  import auth from "../middlewares/auth.js";
  const router = express.Router();
router
    .route("/")
    .post(
    
     addpost
    );

    router
    .route('/:iduser')
    .get(getEventById)

    router
    .route('/:idEvent')
    .delete(deleteOnce)


export default router;