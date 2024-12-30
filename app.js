import express from "express";
import connectDB from "./Config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

/* used MVC Architecture model and controller blocks for designing  */

const app = express();  /* code lines for creating server using express  */
connectDB();

app.use(express.json()); /* middle ware for json script parsing  */

app.use("/products", productRoutes); /* route used for product routes */
app.use("/cart", cartRoutes); /* route used for cart routes */
app.use("/users", userRoutes); /* route used for user routes */

app.use(errorHandler); /* error handler for validation  */

app.listen(5100, () => console.log("Server running on http://localhost:5100")); /* port declaration */
