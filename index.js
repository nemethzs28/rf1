const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const routeRestaurant = require('./route-restaurants');
const PORT  = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const session = require('express-session');
const app = express();
const email = require("nodemailer");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));
app.use(session({secret: 'valami',saveUninitialized: true , resave: true , cookie: { secure: false }}));
app.use(routeRestaurant);
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("App listening at: http://localhost:8080/");
});