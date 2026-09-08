const Order = require("../models/Order");

const createOrder = async (req, res) => {
    const order = await Order.create(req.body);

    res.status(201).json(order);
};

const getOrders = async (req, res) => {
    const orders = await Order.find()
        .populate("userId")
        .populate("products.productId");

    res.json(orders);
};

const updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(order);
};

module.exports = {
    createOrder,
    getOrders,
    updateOrderStatus
};