const router = require("express").Router();
const Product = require("../models/Product");
const SellerProduct = require("../models/SellerProduct");

router.get("/", async (req,res)=> {
  res.json(await Product.find());
});

router.get("/:id", async (req,res)=> {
  res.json(await Product.findById(req.params.id));
});

router.get("/getbyProductId/:prodid", async (req,res)=> {
  const data = await Product.find({ productId: req.params.prodid })
  res.json(data);
});

router.get("/compare/:productId", async (req,res)=>{
  
  const data = await SellerProduct.find({ productId: req.params.productId })
  res.json(data);
});

module.exports = router;
