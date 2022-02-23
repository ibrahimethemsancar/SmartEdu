const express = require("express");
const pageRoute=require('./routes/pageRoute')
const app = express();

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use("/",pageRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server was started on port ${port}`);
});
