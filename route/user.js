// @github_bosheca
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


process.env.SECRET_KEY = 'secret'
// rigister steps (1-regist)
router.post('/register', (req, res) => {
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    console.log(newUser)
    // Search if email is exist or not
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            // if email not exist
            if (!user) {
                // hashing step
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    //create the user
                    User.create(newUser)
                        .then(user => res.send("user created" + newUser.email))
                        .catch(err => res.send(err))
                })
            }
            // if email is exist
            else {
                res.send(`email is already used`)
            }
        })
        .catch(err => res.send(err))
})

// Login steps (1-login) 
router.post('/login', (req, res) => {
    //check email is exist or not

    User.findOne({
            email: req.body.email
        })
        .then(user => {
            // if email is exist
            
            if (user) {

                if (bcrypt.compareSync(req.body.password, user.password)) {

                    user.password = "" //  "" we don't want password to appear
                    var paylod = {
                        user
                    }
                    let token = jwt.sign(paylod, 'secret', {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
                // if password not the same
                else {
                    res.send("email is not currect")
                }
            } else {
                // if email not exist
                console.log("yess")
                res.send("email is not found")
            }
        })
        .catch(err => res.send(err))
})
// logout



module.exports = router