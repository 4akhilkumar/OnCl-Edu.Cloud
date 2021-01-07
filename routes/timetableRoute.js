const express=require('express');

const TimetableRoute = express.Router();

const timetable = require('../model/timetable');

TimetableRoute.route("/:userid").get((req,res)=>{
    timetable.find({userid:req.params.userid},(err,emp)=>{
        if (err) console.log(err);
        else {
        res.json(emp);
        }
    })
})

TimetableRoute.route("/timetable/:id").get((req,res)=>{
  timetable.findById(req.params.id,(err,emp)=>{
        if (err) console.log(err);
        else {
        res.json(emp);
        }
  })
})

TimetableRoute.route("/add").post((req, res) => {
    let emp = new timetable(req.body);
    timetable.find({id:emp.id},(err,e)=>{
      if(e.length!=0){
        return res.status(409).send('Already Timetable Exists');
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
            return res.status(400).send("Failed to Create!!");
          });
      }
    })
});

TimetableRoute.route("/edit/:id").patch((req, res) => {
    timetable.findById(req.params.id,(err,data)=>{
        if (err) console.log(err);
        else {
        data.userid=req.body.userid;
        data.day=req.body.day;
        data.slot1=req.body.slot1;
        data.slot2=req.body.slot2;
        data.slot3=req.body.slot3;
        data.slot4=req.body.slot4;
        data.slot5=req.body.slot5;
        data.slot6=req.body.slot6;
        data.slot7=req.body.slot7;
        data.slot8=req.body.slot8;
        data.slot9=req.body.slot9;
        data.slot10=req.body.slot10;
        data.slot11=req.body.slot11;
        data.slot12=req.body.slot12;
        data.slot13=req.body.slot13;
        data.slot14=req.body.slot14;
        data.slot15=req.body.slot15;
        data
          .save()
          .then((data) => {
            res.json("Edit Done");
          })
          .catch((err) => res.status(400).send("failed"));
        }
  });
});

TimetableRoute.route("/delete/:id").delete((req, res) => {
    timetable.findByIdAndRemove({ _id: req.params.id }, (err, emp) => {
      if (err) res.json(err);
      else {
        res.json("Removed Successfully");
      }
    });
});

module.exports=TimetableRoute;