import express from "express";
import { addToCart, updateCart, deleteFromCart } from "../controllers/cartController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router(); /* router is a class in express and used to define specific routes definations */

router.post("/", authenticate, addToCart); /* authenticate middleware included as only verified user can access cart routes */
router.put("/:id", authenticate, updateCart); /* route declaration to update quantity of a product in the cart */
router.delete("/:id", authenticate, deleteFromCart); /* route to delete a item in the cart */

export default router;
