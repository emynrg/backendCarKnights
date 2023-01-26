
'use strict'
import { validationResult } from 'express-validator'

import User from '../models/user.js';
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { signAccessToken, signRefreshToken } from "../Middlewares/auth.js"; 
 
export function getAll(req, res) {
    User
        .find({})
       
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export async function addOnce(req, res) {
    // Invoquer la méthode create directement sur le modèle
    if (!validationResult(req.body).isEmpty()) {
        return res.status(400).json({ message: 'Invalid user data' })
    }
    const { username, password, role } = req.body
    const hashedPwd = await bcrypt.hash(password, 10);

    const user = await User.findOne({ username, password })
    if (user) res.status(400).json({ message: 'User already exists' })
    else{
        const newUser = await User.create({
            username: req.body.username,
            role: req.body.role,
            email: req.body.email,
            datedenaissance: req.body.datedenaissance,
            numero : req.body.numero,
            password: hashedPwd,
        })
    .then(newUser => {
        res.status(200).json(newUser);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
    }
       
    

}

export function getOnce(req, res) {
    User
        .findOne({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Mettre à jour plusieurs documents
 * Remarque : renommez putOnce par putAll
 */

/*
export function putAll(req, res) {
    User
        .updateMany({}, { "name": "test" })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

*/
/**
 * Updates all fields
 */
export function patchOnce (req, res) {
    User
        .findOneAndUpdate({ "_id": req.params._id },
            {"username": req.body.username,
             "email": req.body.email,
             "datedenaissance" : req.body.datedenaissance,
             "numero": req.body.numero })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
/**
 * Mettre à jour un seul document
 */
export function putOnce(req, res) {
    User
        .findOneAndUpdate({ "username": req.params.username }, { "email": req.body.email })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    User
        .findOneAndRemove({ "username": req.params.username })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}


export async function login(req, res) {
    const { username, password } = req.body

    //const user = await User.findOne({ username: username, password: password })
    const user =  await User.findOne({ username: username })
    
    //
    if (user)  {
        const cmp = await bcrypt.compare(password, user.password);
        console.error(cmp)
        if(cmp){

            res.status(200).json({message:"Login succesfull",
            user})
        } 
        else res.status(404).json({message:"password incorrect"})
  
         
        

    } 

    else res.status(404).json({ message: 'User not found' })
}


export async function loginwithToken(req, res) {

    var password = req.body.password;

    User.findOne({ username: req.body.username }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, async function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            const accessToken = await signAccessToken(user.id);
            // const refreshToken = await signRefreshToken(user.id)
            res.status(200).json({
              message: "Login succesfull",
              accessToken,
              // refreshToken,
              user,
            });
          } else {
            res.status(401).json({
              message: "Password does not matched",
            });
          }
        });
      } else {
        res.status(401).json({
          message: "no user found !!",
        });
      }
    });



}
