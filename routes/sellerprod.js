// routes/sellerProducts.js
const router = require("express").Router();
const SellerProduct = require("../models/SellerProduct");
// Add seller product
router.post("/", async (req, res) => {
  const sellerProduct = await SellerProduct.create(req.body);
  res.json(sellerProduct);
});

// router.get("/" , (req ,res)=>{
//     res.json("hello be");
// })

router.get("/" , async(req , res)=>{
  const all = await SellerProduct.find();
  res.json(all);
})

// Get sellers for a product
router.get("/:productId", async (req, res) => {
  const sellers = await SellerProduct.find({ productId: req.params.productId });
  res.json(sellers);
});

module.exports = router;
