const express  =  require('express');
const router = express.Router();
const user_model =  require('../models/model.user')

//retrieve all users 
router.get('/', async(req,res)=>{
  try{
    const users =  await user_model.find();
    res.send(users)

  }catch(err){
    res.status(500).json({
        message:err.message
    })
  }

})

//retrieve user based on id
router.get('/:id',getUser,(req,res)=>{
   res.json(res.user)
})

//creating a new user
router.post('/',async(req,res)=>{
     
        const user = new user_model({
            name:req.body.name,
            email:req.body.email,
            phoneNo:req.body.phoneNo
        })
try{
    const newUser = await user.save();
    res.status(201).json(newUser);

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }


})

//updating a user
router.patch('/:id',getUser,async(req,res)=>{
    if(req.body.name!==null){
        res.user.name =  req.body.name
    }
    if(req.body.email!==null){
        res.user.email =  req.body.email
    }
    if(req.body.phoneNo!==null){
        res.user.phoneNo =  req.body.phoneNo
    }
     try{

        const updatedUser = await res.user.save();
        res.json(updatedUser)

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }


})

//deleting a user
router.delete('/:id',getUser,async(req,res)=>{
     try{

        await res.user.deleteOne()
        res.json({message:"User deleted"})
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }


})

async function getUser (req,res,next){

    let user;
    try{
        user = await user_model.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message:"Cannot find the user"})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }

    res.user = user
    next()
}
module.exports = router;