import mongoose from "mongoose";


/* Schema defined for cart to include fields like userid, prodcut id , quantity */

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, /* connect cart to a particular user */
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, /* MongoDB Object ID */
      quantity: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema); /* applying cart schema to the collection  */

export default Cart;
