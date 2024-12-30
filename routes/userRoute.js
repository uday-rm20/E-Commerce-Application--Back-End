import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router(); /* router is a class in express and used to define specific routes definations */

/*route to register a new user and add to the document */
router.post("/register", registerUser);

/*route to login a user */
router.post("/login", loginUser);

export default router;
