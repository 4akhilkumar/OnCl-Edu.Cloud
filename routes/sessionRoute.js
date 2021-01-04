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

SessionRoute.route("/add").post((req, res) => {
    let emp = new session(req.body);
    session.find({id:emp.id},(err,e)=>{
      if(e.length!=0){
        return res.status(409).send('Already session Exists');
      }
      else if(err){
        console.log(err);
      }
      else{
        emp
          .save()
          .then((data) => {
            return res.status(200).json(data);
          })
          .catch((err) => {
            return res.status(400).send("Failed to Create");
          });
      }
    })
});

SessionRoute.route("/edit/:id").patch((req, res) => {
    session.findById(req.params.id,(err,data)=>{
        if (err) console.log(err);
        else {
        data.userid=req.body.userid;
        data.coursename=req.body.coursename;
        data.sessiontype=req.body.sessiontype;
        data.topicscovered=req.body.topicscovered;
        data.doc=req.body.doc;
        data.url=req.body.url;
        data.facultyname=req.body.facultyname;
        data.facultyemail=req.body.facultyemail;
        data.platform=req.body.platform;
        data
          .save()
          .then((data) => {
            res.json("Edit Done");
          })
          .catch((err) => res.status(400).send("failed"));
        }
  });
});

module.exports=SessionRoute;