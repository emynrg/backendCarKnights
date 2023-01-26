import express from "express";

import { getAll, addOne, getOne, deleteOne ,getAllLikeByIdUser} from "../controllers/like_post.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.route("/user").get(auth,getAllLikeByIdUser)
router.route("/").get(getAll);
router.route("/:postid").post(auth, addOne);




router.route("/:_id").get(getOne).delete(deleteOne);

export default router;
