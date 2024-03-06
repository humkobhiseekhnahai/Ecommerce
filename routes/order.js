const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require('express').Router();


//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (e) {
        res.status(500).json(e);
    }
});



//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true })
        res.status(200).json(updatedOrder);
    } catch (e) {
        res.status(500).json(e)
    }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id);
        res.status(200).json("Order has been deleted...")
    } catch (e) {
        res.status(500).json(e)
    }
});


//GET  user orders

router.get("/find/:userId", verifyTokenAndAuthorization , async (req, res) => {
    try {
        const cart = await Cart.find({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (e) {
        res.status(500).json(e);
    }
});

//GET ALL Products in cart

router.get("/", verifyTokenAndAdmin,async (req, res) => {
    
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (e) {
        res.status(500).json(e);
    }
});

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group: {
                    _id: "$month",
                    totalSales: { $sum: "$sales" },
                }
            }
        ]);
        res.status(200).json(income);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;