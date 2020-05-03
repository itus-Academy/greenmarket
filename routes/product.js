const router = require('express').Router();
const Product = require("../models/product");

 //POST request - create a nnew product
router.post('/product', async(req,res)=>{

    try{

        let product = new Product();
        product.title = req.body.title,
        product.description = req.body.description,
        product.photo = req.body.photo;
        product.stockQuantity  = req.body.stockQuantity

        await product.save();

        res.json({
            status :true,
            message: "Successfully saved"
        });

    } catch (err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }

})

  // GET request to get all product

  // Get Request to get a single product


  //PUT request to get a single rpoduct


  //DELETE Request too delete a single product

  module.exports = router;