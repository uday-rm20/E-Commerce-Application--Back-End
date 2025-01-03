1) Continuation for the E-Commerce Application.
2) Back End portion of the app
3) Used Express to build a server
4) Used MongoDB to add products to a mongo database
5) Booted some routes to add products to mongodb
6) route to add product to cart
7) edit quantity of products in the cart
8) delete products in the cart

Routes that to be followed to test APIs :

Routes and HTTP methods to be used at Thunder Client:

•	To add a product to the products document –
POST - http://localhost:5100/products 

•	To fetch all product details from product documents-
GET - http://localhost:5100/products

•	To fetch details of a product by their Object ID-
GET - http://localhost:5100/products/id

•	To Register a new user and save to a user document-
POST - http://localhost:5100/users/register

•	To log in a user and generate a JWT token to authenticate-
POST - http://localhost:5100/users/login

•	To add a product to the cart document –
POST - http://localhost:5100/cart

•	To update the quantity of a product in the cart by their Object ID –
PUT - http://localhost:5100/cart/id

•	To delete a product or item from the cart by their Object ID –
DELETE - http://localhost:5100/cart/id

Note: id is the unique object ID given by Mongo DB.
