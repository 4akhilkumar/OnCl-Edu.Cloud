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

UserRoute.route('/login').post((req, res) => { 
    User.findOne({email: req.body.email}, (error, u) => {
        if (error) {
            console.log( error)
        } else {
           if (!u) {
              res.status(401).send("Invalid E - Mail...!")
           } else if (bcrypt.compareSync(req.body.password, u.password)){
              let token =  jwt.sign({id:u._id}, secret) 
              res.status(200).send({token})  
           } else {
              res.status(401).send("Invalid Password...!")
           }
        }
    })
})

UserRoute.route('/userid').get(verifyToken,(req,res,next)=>{
    return res.status(200).json(decodedToken.id)
})

UserRoute.route('/username/:id').get((req,res,next)=>{
    User.findOne({_id:req.params.id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.firstname);
    }, (err) => next(err))
    .catch((err) => next(err));
})

UserRoute.route('/delete/:id').delete((req,res,next)=>{
    User.deleteOne({_id:req.params.id})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send("Removed Successfully")
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports=UserRoute;