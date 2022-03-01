const express = require('express');
const router = express.Router();
const email = require("nodemailer");

const RestaurantDAO = require('./dao/restaurant-dao');
const UserDao = require('./dao/users-dao');
const FoodDAO = require('./dao/food-dao');
const {endOfLine} = require("nodemailer/.prettierrc");
const {set} = require("express");

var filteredRestaurantsGLOBAL = [];
var sess, regerror, logerror, typerror;
//Functions for navigation:

router.get("/login", async (req, res) => {
    sess = req.session
    res.render("Login", {sess: sess, logerror: logerror});
});

router.get("/signout", async (req, res) => {
    sess = req.session
    res.render("SignOut", {sess: sess});
});

router.get("/registration", async (req, res) => {
    sess = req.session;
    res.render("Registration", {sess: sess, regerror: regerror});
});

router.get("/restaurantCreate", async (req, res) => {
    sess = req.session
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    res.render("Create-restaurant", {sess: sess});
});

router.get("/foodCreate/:restaurantid", async (req, res) => {
    sess = req.session
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    res.render("Create-food", {sess: sess, restaurantid: req.params.restaurantid, typerror: typerror});
});
router.get("/profile", async (req, res) => {
    sess = req.session
    if (req.session.email === undefined) {
        res.redirect("/login");
        return;
    }
    let userData = await new UserDao().getOneUser(req.session.email);

    res.render("ProfilePage", {model: userData, sess: sess});
});

router.get("/signOut", async (req, res) => {
    sess = req.session;
    res.render("SignOut");
});

router.get("/profile_update", async (req, res) => {
    sess = req.session;
    if (req.session.email === undefined) {
        res.render("Login");
        return;
    }
    let userData = await new UserDao().getOneUser(req.session.email);

    res.render("ProfileUpdate", {model: userData, sess: sess});
});

router.get("/afterPaying", async (req, res) => {
    sess = req.session;
    res.render("AfterPaying", {sess: sess});
});

router.get("/connection", async (req, res) => {
    sess = req.session;
    res.render("Connection", {sess: sess});
});

router.get("/dataForPaying", async (req, res) => {
    sess = req.session;
    if (req.session.email === undefined) {
        res.render("DataForPaying", {sess: sess});
        return;
    }
    let userData = await new UserDao().getOneUser(req.session.email);
    let fullNamePay = userData.name;
    let emailPay = userData.email;
    let mobilePay = userData.phone;
    let postCode = userData.zipcode;
    let city = userData.city;
    let street = userData.street_housenumber;
    let other = userData.floor_doornumber;

    transporter = email.createTransport({
        service: 'gmail',
        auth: {
            user: 'webpincer.projekt@gmail.com',
            pass: 'webpincer123'
        }
    });

    mailOptions = {
        from: 'webpincer.projekt@gmail.com',
        to: emailPay,
        subject: 'Sikeres rendelés',
        html: "<div><b style='font-size: large'>Kedves <span style='color: #1861ac'>" + fullNamePay + "</span></b><br/>" +
            "<b>Tájékoztatjuk, hogy rendelését sikeresen felvettük és amint elkészül,<br/>" +
            "megkezdjük a kiszállítást Önhöz.</b><br/>" +
            "Megrendelés adatai: <br/>" +
            "Név: " + fullNamePay + "<br/>" +
            "Telefonszám: " + mobilePay + "<br/>" +
            "Cím: " + postCode + " " + city + ", " + street + " " + other + "<br/>" +
            "<b>Köszönjük, hogy minket választott!<br/>" +
            "Webpincér csapata</b></div>"
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
    res.redirect("/afterPaying");
});

router.get("/shoppingCart", async (req, res) => {
    sess = req.session;
    res.render("ShoppingCart", {sess: sess});
});

//-------------------------------------------------------

//Functions for navigation + list from DAO:

router.get("/admin", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let restaurants = await new RestaurantDAO().getRestaurants();
    return res.render('adminPages/AdminRestaurantFinder', {restaurants: restaurants, sess: sess});
});

router.get("/adminUsers", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let users = await new UserDao().getUsers();
    return res.render('adminPages/AdminManageUsers', {users: users, sess: sess});
});

router.post("/adminSupply/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let foods = await new FoodDAO().getFoodsbyRestaurant(id);
    return res.render('adminPages/AdminRestaurantSupply', {foods: foods, sess: sess, restaurantid: id});
});

router.get("/adminSupply/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let foods = await new FoodDAO().getFoodsbyRestaurant(id);
    return res.render('adminPages/AdminRestaurantSupply', {foods: foods, sess: sess, restaurantid: id});
});

router.get("/", async (req, res) => {
    sess = req.session;
    return res.render('Main', {sess: sess});
});

router.post("/RF", async (req, res) => {
    sess = req.session;
    let {filter} = req.body;
    let filteredRestaurants = await new RestaurantDAO().getRestaurantsByFilter(filter.toLowerCase());
    filteredRestaurantsGLOBAL = filteredRestaurants;
    return res.render("RestaurantFinder", {filteredRestaurants: filteredRestaurants, sess: sess});
});

router.get("/RF", async (req, res) => {
    sess = req.session;
    let filteredRestaurants = filteredRestaurantsGLOBAL;
    return res.render('RestaurantFinder', {filteredRestaurants: filteredRestaurants, sess: sess});
});

router.post("/RestaurantSupply/:id", async (req, res) => {
    sess = req.session;
    let restaurantID = req.params.id;
    let filteredFoods = await new FoodDAO().getFoodsbyRestaurant(restaurantID);
    return res.render("RestaurantSupply", {filteredFoods: filteredFoods, sess: sess, cate: ""});
});

router.post("/RestaurantSupply/:id/:cate", async (req, res) => {
    sess = req.session;
    let restaurantID = req.params.id;
    let filteredFoods = await new FoodDAO().getFoodsbyRestaurant(restaurantID);
    return res.render("RestaurantSupply", {filteredFoods: filteredFoods, sess: sess, cate: req.params.cate});
});

//-------------------------------------------------------

//Add functions:

router.post("/add", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let {restaurantName} = req.body;
    let {image} = req.body;
    let {pricecategory} = req.body;
    let {description} = req.body;
    let {rating} = req.body;
    await new RestaurantDAO().createRestaurant(restaurantName, image, pricecategory, description, rating);
    return res.render('Main', {sess: sess})
});

router.post("/addFood/:restaurantid", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let {foodName} = req.body;
    let {description} = req.body;
    let {price} = req.body;
    let {category} = req.body;
    let {allergens} = req.body;
    let {img} = req.body;
    price = parseInt(price);

    if (isNaN(price)) {

        req.session.typerror = true;
        return res.render("Create-food", {
            sess: sess,
            typerror: req.session.typerror,
            restaurantid: req.params.restaurantid
        });
    }

    await new FoodDAO().createFood(allergens.split(","), description, price, foodName, category, req.params.restaurantid, img);
    return res.render('Main', {sess: sess})
});

//-------------------------------------------------------

//Edit functions:

router.get("/edit/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let restaurant = await new RestaurantDAO().getOneRestaurant(id);
    res.render("Update-restaurant", {model: restaurant, sess: sess});
});

router.get("/editFood/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let food = await new FoodDAO().getFoodbyID(id);
    res.render("Update-food", {model: food, sess: sess});
});

router.get("/editUser/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let user = await new UserDao().getOneUserById(id)
    res.render("Update-user", {model: user, sess: sess});
});
//-------------------------------------------------------

//Update functions:

router.post("/update/:id", async (req, res) => {
    let id = req.params.id;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let {name} = req.body;
    let {image} = req.body;
    let {pricecategory} = req.body;
    let {description} = req.body;
    let {rating} = req.body;
    await new RestaurantDAO().updateRestaurant(id, name, image, pricecategory, description, rating);
    res.redirect("/");
});

router.post("/updateFood/:restaurantid/:id", async (req, res) => {
    let id = req.params.id;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let {name} = req.body;
    let {description} = req.body;
    let {price} = req.body;
    let {category} = req.body;
    let allergens = req.body["allergens"].split(",")
    let {img} = req.body;
    await new FoodDAO().updateFood(id, allergens, description, price, name, category, req.params.restaurantid, img);
    res.redirect("/");
});


router.post("/updateUser/:id", async (req, res) => {

    let userDao = new UserDao();
    let id = req.params.id;
    let {name} = req.body;
    let {phone} = req.body;
    let {password} = req.body;
    let {city} = req.body;
    let {street_housenumber} = req.body;
    let permission = req.params.permission;
    let {zipcode} = req.body;
    let {floor_doornumber} = req.body;

    let user = await userDao.getOneUserById(id)

    if (isNaN(phone)) {
        res.render("ProfilePage", {model: user, sess: sess});
        return;
    }

    if (phone === "") {
        phone = null;
    }

    await userDao.updateUser(id, name, phone, user.email, password, city, street_housenumber, permission, zipcode, floor_doornumber);
    res.redirect("/profile");
});


router.post("/adminUpdateUser/:id", async (req, res) => {
    let id = req.params.id;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let userDao = new UserDao()
    let user = await userDao.getOneUserById(id)
    let {name} = req.body;
    let {phone} = req.body;
    let {email} = req.body;
    let {city} = req.body;
    let {street_housenumber} = req.body;
    let {permission} = req.body;
    let {zipcode} = req.body;
    let {floor_doornumber} = req.body;

    let tomb = await userDao.getUsers();
    for (const userItem of tomb) {
        if (userItem.email === user.email) {
            continue;
        }

        if (email === userItem.email) {
            res.render("Update-user", {model: user, sess: sess});
            return;
        }
    }


    if (isNaN(phone)) {
        res.render("Update-user", {model: user, sess: sess});
        return;
    }

    if (phone === "") {
        phone = null;
    }


    await userDao.updateUserNoPassword(id, name, phone, email, city, street_housenumber, permission, zipcode, floor_doornumber);
    let users = await userDao.getUsers();
    return res.render('adminPages/AdminManageUsers', {users: users, sess: sess});
});
//-------------------------------------------------------

//Delete functions:

router.post("/delete/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    await new RestaurantDAO().deleteRestaurant(id);
    res.render('Main', {sess: sess});
});

router.post("/deleteFood/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    await new FoodDAO().deleteFood(id);
    res.render('Main', {sess: sess});
});

router.post("/deleteUser/:id", async (req, res) => {
    sess = req.session;
    if (req.session.permission !== "admin") {
        res.redirect("/");
        return;
    }
    let id = req.params.id;
    let userDao = new UserDao();
    await userDao.deleteUser(id)
    let users = await userDao.getUsers();
    return res.render('adminPages/AdminManageUsers', {users: users, sess: sess});
});
//-------------------------------------------------------

//Functions for login and registration:

router.post("/loginaccount", async (req, res) => {
    let {email} = req.body;
    let {password} = req.body;
    let tomb = await new UserDao().getUsers();

    for (const user of tomb) {
        if (email === user.email && password === user.password) {
            req.session.email = email;
            req.session.name = user.name
            req.session.phone = user.phone
            req.session.city = user.city
            req.session.street_housenumber = user.street_housenumber
            req.session.permission = user.permission
            req.session.zipcode = user.zipcode
            req.session.floor_doornumber = user.floor_doornumber
            res.redirect("/");
            return;
        }
    }
    req.session.logerror = true;
    res.render("Login", {logerror: req.session.logerror});
});

router.post("/regaccount", async (req, res) => {
    let {firstName} = req.body;
    let {lastName} = req.body;
    let {regemail} = req.body;
    let {regpassword} = req.body;
    let {regpasswordAgain} = req.body;
    let {mobile} = req.body;
    let {postCode} = req.body;
    let {city} = req.body;
    let {street} = req.body;
    let {other} = req.body;

    let tomb = await new UserDao().getUsers();
    for (const user of tomb) {
        if (regemail === user.email) {
            req.session.regerror = "Sikertelen regisztráció : létező email cím";
            regerror = req.session.regerror;
            res.render("Registration", {regerror: regerror, sess: sess});
            return;
        }
    }

    if (regpassword !== regpasswordAgain) {
        req.session.regerror = "Sikertelen regisztráció : nem egyező jelszó";
        regerror = req.session.regerror;
        res.render("Registration", {regerror: regerror, sess: sess});
        return;
    }
    if (isNaN(mobile)) {
        req.session.regerror = "Sikertelen regisztráció : helytelen telefonszám";
        regerror = req.session.regerror;
        res.render("Registration", {regerror: regerror, sess: sess});
        return;
    }
    if (mobile === "") {
        mobile = null
    }

    await new UserDao().createUser(lastName + " " + firstName, mobile, regemail, regpassword, city, street, postCode, other);
    res.redirect("/login");
});

router.get("/logout", async (req, res) => {
    req.session.destroy();
    sess = null;
    res.redirect("/");
});

router.post("/sendmail", async (req, res) => {
    let {fullNamePay} = req.body;
    let {emailPay} = req.body;
    let {mobilePay} = req.body;
    let {postCode} = req.body;
    let {city} = req.body;
    let {street} = req.body;
    let {other} = req.body;

    transporter = email.createTransport({
        service: 'gmail',
        auth: {
            user: 'webpincer.projekt@gmail.com',
            pass: 'webpincer123'
        }
    });

    mailOptions = {
        from: 'webpincer.projekt@gmail.com',
        to: emailPay,
        subject: 'Sikeres rendelés',
        html: "<div><b style='font-size: large'>Kedves <span style='color: #1861ac'>" + fullNamePay + "</span></b><br/><br/>" +
            "<b>Tájékoztatjuk, hogy rendelését sikeresen felvettük és amint elkészül,<br/>" +
            "megkezdjük a kiszállítást Önhöz.</b><br/>" +
            "Megrendelés adatai: <br/>" +
            "Név: " + fullNamePay + "<br/>" +
            "Telefonszám: " + mobilePay + "<br/>" +
            "Cím: " + postCode + " " + city + ", " + street + " " + other + "<br/><br/>" +
            "<b>Köszönjük, hogy minket választott!<br/>" +
            "Webpincér csapata</b></div>"
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
    res.redirect("/afterPaying");
});

module.exports = router;
