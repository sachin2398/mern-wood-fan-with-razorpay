const express = require("express");
const { userController } = require("./controllers/UserController");
const { connection } = require("./configs/db");
const cors = require("cors");

const { productsController } = require("./controllers/ProductsController");
const { cartController } = require("./controllers/CartController");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("admin"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ massege: "Server is working" });
});

app.use("/user", userController);
app.use("/products", productsController);
app.use("/cart", cartController);

// port  listenning

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (error) {
    console.log("error while connection to DB");
    console.log(error);
  }
  console.log(`Server is running at port ${PORT}`);
});
