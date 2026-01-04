const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db")();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/auth", require("./routes/auth"));
app.use("/product", require("./routes/products"));
app.use("/sellerproducts", require("./routes/sellerprod"));
app.use("/orderStatus", require("./routes/orderstate"));
app.use("/reviews", require("./routes/reviews"));
// app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Backend running on ${PORT}`));
