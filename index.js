const express = require("express");
const app=  express();
const moongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require( "./routes/user") ;
const authRoute = require("./routes/auth")
const productRoute = require( './routes/product' ) ;
const orderRoute = require( './routes/order' ) ;
const cartRoute = require("./routes/cart");

dotenv.config();


moongoose
.connect("mongodb+srv://prathammailme09:Bwuack09@cluster0.pakoo3h.mongodb.net/BlockChain")
.then(()=> console.log('connected to the database'))
.catch((err)=>console.log(err));


app.get("/api/test",()=>{
    console.log("test is successful")
});
app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use( "/api/products" , productRoute );
app.use( "/api/cart" , cartRoute );
app.use( "/api/order" , orderRoute );


app.listen(3000, ()=>{
    console.log(`Backend is running`);
});


