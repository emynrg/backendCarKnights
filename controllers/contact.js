import Contact from "../models/contact.js";

export function getAll(req, res) {
  Contact.find({})
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export async function addOne(req, res) {
  let contact = await validation(req.auth.userId, req.params.user2);
  if (contact) {
    let contact_id = contact._id;
    console.log(contact._id);
    console.log("true");
    await Contact.updateOne({ _id: contact_id }, { $set: { match: true } })
      .then((doc) => {
        res.status(200).json("users contact sucess");
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } else {
    console.log("false");

    Contact.create({
      user1: req.auth.userId,
      user2: req.params.user2,
    })
      .then((newContact) => {
        res.status(201).json("newContact");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
}

export function getOne(req, res) {
  Contact.findOne({ _id: req.params._id })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  Contact.findOneAndRemove({ _id: req.params._id })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export async function validation(id1, id2) {
  try {
    return await Contact.findOne({
      $or: [
        { $and: [{ user1: id1 }, { user2: id2 }] },
        { $and: [{ user1: id2 }, { user2: id1 }] },
      ],
    });
  } catch (error) {}
}

export function getAllContactByIdUser(req, res) {
  console.log(req.auth);

  Contact.find({
    $or: [{ user1: req.auth.userId }, { user2: req.auth.userId }],
    match: true,
  })
    .populate("user2", ["username", "email", "numero"])
    .populate("user1", ["username", "email", "numero"])
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}
