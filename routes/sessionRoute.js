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

