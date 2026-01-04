// routes/orderStatus.js
const router = require("express").Router();
const Order = require("../models/OrderStatus");


router.post("/", async (req, res) => {
  const order = await Order.create({
    userId: req.body.userId,
    productId: req.body.productId,
    productName: req.body.productName,
    brand: req.body.brand,
    category: req.body.category,
    price: req.body.price,
    image: req.body.image,
    status: req.body.status || "PLACED",
    date: req.body.date || new Date().toISOString().slice(0, 10),
  });
  res.json(order);
});


router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

// GET SINGLE ORDER (TRACK PAGE)
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// GET ONLY CURRENT STATUS
router.get("/:id/status", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json({ status: order.status });
});

// UPDATE ORDER STATUS (DELIVERY TRACKING)
router.patch("/:id/status", async (req, res) => {
  const order = await Order.findById(req.params.id);

  order.status = req.body.status;
  order.timeline.push({
    status: req.body.status,
    time: new Date()
  });

  await order.save();
  res.json(order);
});

module.exports = router;
