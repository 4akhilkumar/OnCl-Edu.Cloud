const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User=require('../model/user');
const express=require('express');
const secret='4422SecretKey';

const UserRoute=express.Router();


var decodedToken='';
function verifyToken(req, res, next) {
    let token=req.query.token;
    jwt.verify(token,secret,(err,tokendata)=>{
        if(err)
            return res.status(401).send('Unauthorized request')
        if(tokendata){
            decodedToken=tokendata
            next()
        }
    })
}

UserRoute.route('/register').post((req, res) => {
    let user = new User({
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password, 10)
    })
    User.findOne({email:req.body.email},(error,u)=>{
        if(u)
        return res.status(409).send('E - Mail Already Exists');
        else{
            user.save((error, registeredUser) => {
                if (error) {
                    console.log("Error While Registering User To Database...!\n" + error)
                } else {
                    let token =  jwt.sign({id:registeredUser._id}, secret)
                    res.status(200).send({token})
                }
            })
        }
    })  
})

