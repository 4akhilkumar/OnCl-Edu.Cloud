const express=require('express');

const SessionRoute = express.Router();

const session = require('../model/session');

SessionRoute.route("/:userid").get((req,res)=>{
    session.find({userid:req.params.userid},(err,emp)=>{
        if (err) console.log(err);
        else {
        res.json(emp);
        }
    })
})

SessionRoute.route("/session/:id").get((req,res)=>{
  session.findById(req.params.id,(err,emp)=>{
        if (err) console.log(err);
        else {
        res.json(emp);
        }
  })
})

