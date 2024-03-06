const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
    try {
        const stripeRes = await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "inr",
        });
        res.status(200).json(stripeRes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing the payment." });
    }
});

module.exports = router;
