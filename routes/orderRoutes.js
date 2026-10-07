const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

// Endpoint: GET /api/users - Find all users (READ)
router.get("/", async function (req, res) {
  try {
    const orders = await Order.getOrders();
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: GET /api/users/:id - Find single user (READ)
router.get("/:id", async function (req, res) {
  try {
    const order = await Order.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, error: "Order not found" });
    }
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: POST /api/users - Add new user (CREATE)
router.post("/", async function (req, res) {
  try {
    const { orderDesc, quantity, unitCost } = req.body;
    const insertId = await Order.addOrder(req.body);
    const newOrder = await Order.getOrderById(insertId);

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
