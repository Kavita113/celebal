const express = require('express');
const jwt = require('jsonwebtoken');

exports.verifyToken = (req,res,next)=>{
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1]
if (token ==null){
    return res.status(401).send({
        message:"Unauthorized"
    })
}

jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.status(403  )
        req.user = user
    next()
})

}