import mongoose from "mongoose";


/* Schema defined for user to include fields like name, email, password */

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true, /* requried is used to validate all fields to be included */
    },
}, { timestamps: true });

export default mongoose.model("User", userSchema); /* applying schema to the collection and exporting the model */
