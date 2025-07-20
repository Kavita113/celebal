const mongoose = require('mongoose');
const express = require('express')
require('dotenv').config();
const app = express();

//connecting to mongodb database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
//if there is an error in connecting to mongodb database
db.on('error',(err)=>{
    console.error("Error: ",err)
})

//if connection successfully established
db.once('open',()=>{
    console.log("Connected to database ")
})

app.use(express.json())  //Parse JSON data


//handling the routes for users and products
const usersRouter = require('./routes/routes.users');
const productsRouter = require('./routes/routes.products'); 
const authRouter =  require('./routes/auth.routes');

app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/auth/',authRouter);

//start the server
app.listen(process.env.PORT,()=>{
    console.log("Server started at PORT : ",process.env.PORT);
})