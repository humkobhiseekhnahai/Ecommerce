const Cart = require("../models/Cart.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require('express').Router();


//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (e) {
        res.status(500).json(e);
    }
});



//UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true })
        res.status(200).json(updatedCart);
    } catch (e) {
        res.status(500).json(e)
    }
});

//DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndUpdate(req.params.id);
        res.status(200).json("Cart has been deleted...")
    } catch (e) {
        res.status(500).json(e)
    }
});


//GET  user cart

router.get("/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (e) {
        res.status(500).json(e);
    }
});

//GET ALL Products in cart

router.get("/", verifyTokenAndAdmin,async (req, res) => {
    
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;