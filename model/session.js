const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let session = new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true
    },
    coursename: {
        type: String,
        required: true
    },
    sessiontype: {
        type: String,
        required: true
    },
    topicscovered: {
        type: String,
        required: true
    },
    doc:{
        type:String,
        required:true
    },
    url: {
        type:String ,
        required: true
    },
    facultyname:{
        type:String,
        required:true
    },
    facultyemail: {
        type:String ,
        required: true
    },
    platform: {
        type:String ,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

session = mongoose.model("oncl", session);

module.exports = session;