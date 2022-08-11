const { application } = require("express");
const express = require("express");
//import  express  from 'express';
const app = express();
const path = require("path");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set('json spaces',2)

//middlewares
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use("/api/movies",require("./routes/apiRoute"));
app.use("/api/users",require("./routes/users"));

//static files

app.use(express.static(path.join(__dirname, "public")));

//listen the server

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get(process.env.PORT || "port")}`);
});

