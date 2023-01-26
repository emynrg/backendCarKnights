import LikePost from "../models/like_post.js";

export function getAll(req, res) {
  LikePost.find({})
    .then((like_post) => {
      res.status(200).json(like_post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function addOne(req, res) {
  LikePost.create({
    post_id: req.params.postid,
    user_id: req.auth.userId,
  })
    .then((newLikePost) => {
      res.status(201).json(newLikePost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}
export function getAllLikeByIdUser(req, res) {
  LikePost.find({
    user_id: req.auth.userId,
  })
    .then((like_post) => {
      res.status(200).json(like_post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
export function getOne(req, res) {
  LikePost.findOne({ _id: req.params._id })
    .then((like_post) => {
      res.status(200).json(like_post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  LikePost.findOneAndRemove({ _id: req.params._id })
    .then((like_post) => {
      res.status(200).json(like_post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
