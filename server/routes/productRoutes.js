const express = require("express");
const router = express.Router();

const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post(
    "/",
    authMiddleware,
    roleMiddleware,
    addProduct
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware,
    updateProduct
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware,
    deleteProduct
);

module.exports = router;