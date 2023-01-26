import Event from "../models/event.js"




export function addpost(req, res) {
    
    Event.create({
        EventName: req.body.EventName,
        EventDescription: req.body.EventDescription,
        user: req.body.user       
    })
      .then((newEvent) => {
        res.status(201).json(newEvent);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }

  export function getEventById(req, res) {
    Event
        .find({ "user": req.params.iduser })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function deleteOnce(req, res) {
  Event
      .findOneAndRemove({ "_id": req.params.idEvent })
      .then(doc => {
          res.status(200).json(doc);
      })
      .catch(err => {
          res.status(500).json({ error: err });
      });
}