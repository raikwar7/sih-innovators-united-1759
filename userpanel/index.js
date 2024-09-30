const express = require("express");
const app = express();

const userModel = require("./models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require("./utils/generateToken");
const user = require("./models/user.model");

const expressSession = require('express-session');
const flash = require('connect-flash');


const cookieParser = require('cookie-parser');
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

require("dotenv").config(); //to use .env file datas


app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)

app.use(flash());


app.get("/", function(req, res){
    res.render("index")
})

app.post("/register", async function(req,res){
    try {

        let { email, password, fullname, address, contactNo } = req.body;

        let user = await userModel.findOne({ email: email });
        if (user) return res.status(401).send("You already have an account please login")

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                        address,
                        contactNo,
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.render("parcel");
                }
            });
        });


    } catch (err) {
        res.send(err.message);
    }
})

app.listen(3000);