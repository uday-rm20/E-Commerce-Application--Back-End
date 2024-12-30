import Product from "../models/product.js";

/* Fetch all products from the products document */

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

/* Fetch a single product by ID ( MongoDB ID )*/

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" }); /* error handling  */
    }
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

/* Add a new product to the products document  */

export const addProduct = async (req, res, next) => {
  try {
    const { name, price, description, stock } = req.body; /* body description in thunder bird all fields */

    const newProduct = new Product({
      name,
      price,
      description,
      stock,
    });

    await newProduct.save(); /* saving new product to the document */
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    next(err);
  }
};
