const express = require("express");
const { CartModel } = require("../models/CartModel");


const cartController = express.Router();

cartController.get(
  "/",

  async (req, res) => {
    try {
      const data = await CartModel.findOne({ userId: req.userId });
      res.send(data.cart);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

cartController.patch(
  "/",
 
  async (req, res) => {
    try {
      //   console.log(req.userId);
      const data = await CartModel.findOneAndUpdate(
        { userId: req.userId },
        req.body
      );
      res.json({ message: "Data has been added" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = { cartController };
