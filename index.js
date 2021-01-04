const express=require('express');
const cors = require("cors");
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
const port=4000;
const app = express();
app.use(cors());
app.use(bodyparser.json());  

app.listen(port, () => console.log("Running on port " + port));