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

app.listen(5000, () => console.log("Backend running on 5000"));
