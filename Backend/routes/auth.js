const router = require('express').Router();
const User = require( '../models/User');
const CryptoJs = require( "crypto-js"); 
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, 
            
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(e){
        res.status(500).json(e);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (!user) {
            res.status(401).json({ message: "Invalid username or password" });
        } else {
            const accessToken = jwt.sign({
                id:user._id,
                isAdmin: user.isAdmin,
            },process.env.JWT_SEC,{expiresIn:"3d"});

            const { password, ...others } = user._doc;
            res.status(200).json({...others,accessToken});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;