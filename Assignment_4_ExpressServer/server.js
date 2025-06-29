const express = require('express');
const PORT = 8080;
const app= express();

const loginRoute = require('./routes/routes.login');
const registerRoute =  require('./routes/routes.register')

app.set('views','views')
app.set('view engine','ejs');


const Password = 123456;
const name = "Kavita";

app.use('/login',loginRoute);

app.use('/register',registerRoute);

app.use(verifyUser);
app.get('/',(req,res)=>{
    res.render('index',{title:"Home page",heading:"This is homepage!"});
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port : ${PORT} `);
})

function verifyUser(req,res,next){
    if(Password === 123456 && name === "Kavita"){
        next();
    }else{
        res.send("Credentials invalid!");
    }
}