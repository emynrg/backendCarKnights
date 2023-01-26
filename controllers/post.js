import Post from "../models/post.js";
import jwt from "jsonwebtoken";
export function getAll(req, res) {
  Post.find({})
  .populate("user", ["username"])
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function addOne(req, res) {
  console.log(req.auth.userId);
  Post.create({
    titre: req.body.titre,
    description: req.body.description,
    imagePost: `${req.protocol}://${req.get('host')}/imgPost/${
      req.file.filename
    }`,
   // imagePost:req.body.imagePost,
    user: req.auth.userId,
  })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}
 
export function getPostById(req, res) {
  Post.findOne({ _id: req.params._id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function putAll(req, res) {
  const update = {
    titre: req.body.titre,
    description: req.body.description,
    imagePost: `${req.protocol}://${req.get("127.0.0.1:9091")}/img/posts/${
      req.file.filename
    }`,
    user: req.auth.userId,
  };

  Post
    .updateOne(
      { _id: req.params._id },
      {
        new: true,
      }
    )

    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  Post.findOneAndRemove({ _id: req.params._id })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function getAllPostByIdUser(req, res) {
  Post.find({ user: req.auth.userId })
    .populate("user")
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}