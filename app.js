const express = require("express");
const mongoose=require('mongoose');
const bodyParser = require('body-parser')
const pageRoute=require('./routes/pageRoute')
const courseRoute=require('./routes/courseRoute')
const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartEdu-db')
.then(()=>{
  console.log("db connected")
})
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use("/",pageRoute);
app.use("/courses",courseRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server was started on port ${port}`);
});
