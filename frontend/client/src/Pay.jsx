import React, { useState, useEffect } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'; // Import axios for making HTTP requests

const STRIPE_FRONTEND_KEY = "pk_test_51Oq8cXSFU1jcahPHv11MzdHDBJc3DIjee4oO53mUNMeVqhKNIbhz7AWNZ6dOgOtdtymAnK6GNcjBbJlPoKw4HF3G008p63MRIw";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:3000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && makeRequest(); // Invoke makeRequest function when stripeToken changes
    }, [stripeToken]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StripeCheckout
                name="Meri Dukan"
                image="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=OFQfvkU48JTYo1aehyB1kPX7sh2CjA5I66Pdmc9qxho=" // Ensure this URL is correct
                billingAddress
                shippingAddress
                description="Your total is 20 rupees"
                amount={2000}
                token={onToken}
                stripeKey={STRIPE_FRONTEND_KEY} // Corrected typo
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    PAY NOW
                </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;
