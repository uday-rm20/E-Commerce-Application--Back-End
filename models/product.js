import mongoose from "mongoose";


/* Schema defined for product to include fields name, price, description, stock */
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true }, /* requried is used to validate all fields to be included */
});

const Product = mongoose.model("Product", productSchema); /* applying schema to the collection */

export default Product;
