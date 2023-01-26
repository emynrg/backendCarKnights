import LikeCom from "../models/like_com.js";

export function getAll(req, res) {
  LikeCom.find({})
    .then((like_com) => {
      res.status(200).json(like_com);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function addOne(req, res) {
  LikeCom.create({
    post_id: req.body.post_id,
    user_id: req.body.user_id,
  })
    .then((newLikeCom) => {
      res.status(201).json(newLikeCom);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function getOne(req, res) {
  LikeCom.findOne({ _id: req.params._id })
    .then((like_com) => {
      res.status(200).json(like_com);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  LikeCom.findOneAndRemove({ _id: req.params._id })
    .then((like_com) => {
      res.status(200).json(like_com);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
