const express=require('express');
const cors = require("cors");
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
const port=4000;
const app = express();

mongoose
.connect("mongodb+srv://Database4WhiN:Database4WhiN@whin.wbc8o.mongodb.net/WhiN?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB, Successfully."));

const SessionRoute=require('./routes/sessionRoute');
const UserRoute=require('./routes/userRoute');

app.use(cors());
app.use(bodyparser.json());  
app.use("/sessions", SessionRoute);
app.use('/user',UserRoute);

app.listen(port, () => console.log("Running on port " + port));