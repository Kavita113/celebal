const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{
        title:"Register page",
        heading:"Register page"
    })
})

module.exports =  router;