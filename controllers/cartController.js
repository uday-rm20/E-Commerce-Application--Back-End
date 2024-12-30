import Cart from "../models/Cart.js";

/*Add a product to the cart*/

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id; /*passes through middleware to see only authorized user can access cart routes */

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    next(err);
  }
};

/* Update cart (change quantity of a product in cart) */

export const updateCart = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const { id: productId } = req.params;
    const userId = req.user.id; /*passes through middleware to see only authorized user can access cart routes */

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.products[productIndex].quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (err) {
    next(err);
  }
};

/* Remove a product from the cart by their id  */

export const deleteFromCart = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const userId = req.user.id; /*passes through middleware to see only authorized user can access cart routes */

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.products.splice(productIndex, 1); /* removing that particular product from cart */
    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart }); /* confirmation message */
  } catch (err) {
    next(err); /* go through next middleware or server */
  }
};
