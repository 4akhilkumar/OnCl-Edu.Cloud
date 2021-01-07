const express=require('express');
const cors = require("cors");
const mongoose=require('mongoose');
const bodyparser=require("body-parser");
const app = express();
const compression=require('compression');
const dotenv=require('dotenv');
const helmet=require('helmet');
const path=require('path');
dotenv.config({path:"./config.env"});
const port = process.env.PORT || 4000;

mongoose
.connect("mongodb+srv://Database4WhiN:Database4WhiN@whin.wbc8o.mongodb.net/WhiN?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB, Successfully."));

const TimetableRoute=require('./routes/timetableRoute');
const SessionRoute=require('./routes/sessionRoute');
const UserRoute=require('./routes/userRoute');

app.use(compression());
app.use(express.static(process.cwd() + "/oncl/dist/oncl"));
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "https:", "http:", "data:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "http:", "data:"],
        scriptSrc: ["'self'", "https:", "http:", "blob:"],
        styleSrc: ["'self'", "'unsafe-inline'", "https:", "http:"],
      },
    })
);

app.use(cors());
app.use(bodyparser.json());
app.use('/timetable',TimetableRoute);
app.use("/sessions", SessionRoute);
app.use('/user',UserRoute);

app.get("*", (req, res) => { 
  res.sendFile(path.resolve(process.cwd() + "/OnCl/dist/OnCl/index.html"));
});

app.listen(port, () => console.log("Running on port " + port));