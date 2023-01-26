import Car from "../Models/car.js";

export function getAllCar(req, res) {
  Car.find({
    user: { $ne: req.auth.userId },
  })

    .sort({
      marque: "desc",
      model: "desc",
      description: "desc",
    })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


export function getCarById(req, res) {
  Car.findOne({ _id: req.params._id })
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function updateCar(req, res) {
  Car.updateOne({ _id: req.params._id }, { $set: req.body })
    .then((doc) => {
      res.status(200).json("Car updated");
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addCar(req, res) {
  console.log(req.auth.userId);
  Car.create({
    marque: req.body.marque,
    model: req.body.model,
    description: req.body.description,

    image: `${req.protocol}://${req.get('host')}/img/${
      req.file.filename
    }`,
    user: req.auth.userId,
  })
    .then((newCar) => {
      res.status(201).json(newCar);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}