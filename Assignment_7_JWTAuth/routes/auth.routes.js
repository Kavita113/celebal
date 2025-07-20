const express = require("express");
const jwt = require("jsonwebtoken");

const user_model = require("../models/model.user");
const product_model = require("../models/model.product");

const authMiddleware = require('../middlewares/auth.mw')

const router = express.Router();


router.post("/login",(req, res) => {
  // first authenticate the user
  const { name, email, phoneNo } = req.body;
  const user = user_model.findOne({name,email});
  if(!user){
    return res.status(401).send({message:"Invalid credentials"});
  }
  const newUser = {name,email,phoneNo};

  const token  = jwt.sign(newUser,process.env.ACCESS_TOKEN_SECRET);
  res.json({token:token})
});

router.post("/register", (req, res) => {});
module.exports = router;
