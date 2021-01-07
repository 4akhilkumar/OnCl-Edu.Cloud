const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let timetable = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    day: {
        type: String,
        required: true
    },
    slot1: {
        type: String,
        required: true
    },
    slot2: {
        type: String,
        required: true
    },
    slot3:{
        type:String,
        required:true
    },
    slot4: {
        type:String ,
        required: true
    },
    slot5:{
        type:String,
        required:true
    },
    slot6: {
        type:String ,
        required: true
    },
    slot7: {
        type:String ,
        required: true
    },
    slot8: {
        type:String ,
        required: true
    },
    slot9: {
        type:String ,
        required: true
    },
    slot10: {
        type:String ,
        required: true
    },
    slot11: {
        type:String ,
        required: true
    },
    slot12: {
        type:String ,
        required: true
    },
    slot13: {
        type:String ,
        required: true
    },
    slot14: {
        type:String ,
        required: true
    },
    slot15: {
        type:String ,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

timetable = mongoose.model("timetable", timetable);

module.exports = timetable;