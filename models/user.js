const express =require("express");
const {User}=require("../db/signup")
const router =new express.Router();
const validator=require("validator")

// API for signup
router.post("/signup", async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    try {
    await user.save();
    res.status(201).send({ user });
    } catch (e) {
    res.status(e);
    }
});


// API for login
router.post("/login", async (req, res) => {
    try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.send("Please enter valid cred");
    } else {
        const user = await User.findOne({ Password: req.body.Password });
        if (!user) {
        res.send("Please enter valied cred");
        } else {
        console.log(user);
        res.send({ user });
        }
    }
    } catch (e) {
    res.status(400);
    }
});
