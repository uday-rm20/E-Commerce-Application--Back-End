import express from "express";
import { getProducts, getProductById, addProduct } from "../controllers/productController.js";

const router = express.Router(); /* router is a class in express and used to define specific routes definations */

router.get("/", getProducts); /* route to fetch all products in the document */
router.get("/:id", getProductById); /*route to fetch a single product by ID*/
router.post("/", addProduct); /*route to add a new product to the document */

export default router;
