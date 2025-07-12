const express  =  require('express');
const router = express.Router();
const product_model = require('../models/model.product')

//retrieve all products 
router.get('/',async(req,res)=>{
  try{

    const products =  await product_model.find();
   res.send(products)

  }catch(err){
    res.status(500).json({
        message:err.message
    })
  }

})

//retrieve product based on id
router.get('/:id',getProduct,async(req,res)=>{
     try{
        res.json(res.product)
    }catch(err){
        res.status(500).json({
            message:+err.message
        })
    }

})

//creating a new product
router.post('/',async(req,res)=>{
    const product = new product_model({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    });
      try{
        const newProduct = await product.save();
        res.status(201).json(newProduct);

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }

})

//updating a product
router.patch('/:id',getProduct,async(req,res)=>{
    if(req.body.name!==null){
        res.product.name = req.body.name
    }
    if(req.body.description!==null){
        res.product.description = req.body.description
    }
    if(req.body.price!==null){
        res.product.price = req.body.price
    }
      try{

        const updatedProduct = res.product.save();
        res.json(updatedProduct)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }

})

//deleting a product
router.delete('/:id',getProduct,async(req,res)=>{
      try{
        await res.product.deleteOne();
        res.json("Product deleted!");

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

})

async function getProduct(req,res,next){
    let product;
    try{
       product =await product_model.findById(req.params.id);
       if(product == null){
        return res.status(404).send({message:"Cannot find the product"})
       }

    }catch(err){

        return res.status(500).send({message:err.message})
    }
 
    res.product= product;
    next()
}
module.exports = router;