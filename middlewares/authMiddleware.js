import jwt from "jsonwebtoken";

/* Middleware for authorization before accessing cart routes */

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; /* field to be added in thunder bird under header section to validate the user */
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, "uday_jwt_key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
