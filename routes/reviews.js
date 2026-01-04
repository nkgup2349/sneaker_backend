// routes/reviews.js
const router = require("express").Router();
const Review = require("../models/Review");

// ADD REVIEW
router.post("/", async (req, res) => {
  const review = await Review.create({
    id: req.body.id,
    productId: req.body.productId,
    user: req.body.user,
    rating: req.body.rating,
    comment: req.body.comment,
    date: req.body.date
  });
  res.json(review);
});

// GET ALL REVIEWS
router.get("/", async (req, res) => {
  res.json(await Review.find());
});

// GET REVIEWS BY PRODUCT
router.get("/:productId", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
});

module.exports = router;
