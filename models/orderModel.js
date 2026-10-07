const db = require("../config/db");

const Order = {
  // Create
  async addOrder(orderData) {
    const { orderDesc, quantity, unitCost } = orderData;
    const sql = `INSERT INTO orders (orderDesc, quantity, unitCost) VALUES (?, ?, ?)`;
    const [result] = await db.execute(sql, [orderDesc, quantity, unitCost]);
    return result.insertId;
  },

  // Read All
  async getOrders() {
    const sql = `SELECT orderID, orderDesc, quantity, unitCost, created FROM orders`;
    const [rows] = await db.execute(sql);
    return rows;
  },

  // Read One by ID
  async getOrderById(id) {
    const sql = `SELECT orderID, orderDesc, quantity, unitCost, created FROM orders WHERE orderID = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows[0] || null;
  },

};

module.exports = Order;
