const express =  require('express');
const mongoose =  require('mongoose');
const studentRouter =  require('./routes/routes.student');

const app = express();
const PORT = 8000;
const url = "mongodb://localhost/studentDB";

//to read requests in json format
app.use(express.json());

//for all routes/requests for the students,handle it to studentRouter
app.use('/students',studentRouter)



//establishing connection to mongodb 
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

//check if connection is open
con.on('open',()=>{
console.log('connected!...')
})

//starting the server
app.listen(PORT,()=>{
    console.log("Server starting at port :" , PORT);
})