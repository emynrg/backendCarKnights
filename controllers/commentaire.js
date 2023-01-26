import Commentaire from "../models/commentaire.js";

export function getAll(req, res) {
  Commentaire.find({})
    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function addOne(req, res) {
  Commentaire.create({
    content: req.body.content,
    post_id: req.body.post_id,
    user_id: req.body.user_id,
  })
    .then((newCommentaire) => {
      res.status(201).json(newCommentaire);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function getOne(req, res) {
  Commentaire.findOne({ _id: req.params._id })
    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function putAll(req, res) {
  const update = {
    content: req.body.content,
  };
  Commentaire.updateOne(
    { _id: req.params._id },
    {
      new: true,
    }
  )

    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function patchOne(req, res) {
  Commentaire.findOneAndUpdate(
    { _id: req.params._id },
    {
      content: req.body.content,
    }
  )
    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  Commentaire.findOneAndRemove({ _id: req.params._id })
    .then((commentaire) => {
      res.status(200).json(commentaire);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
