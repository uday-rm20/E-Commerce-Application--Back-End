import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); /* Loading environment variables from .env file */

/* Register a new user and adding details to user document */

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        /*validating whether user already exists or not */

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        /*Hash the password*/

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        /*Create a new user by giving all required fields */

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
 
        await newUser.save(); /* saving new user to the document */

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        res.status(500).json({ message: "Error registering user", error: err.message }); /* error handling  */
    }
};

/* function for Login user */

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        /*validating whether user already exists or not */
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        /* verifying password */
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        /*Generate JWT token */
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message }); /* error handling */
    }
};
