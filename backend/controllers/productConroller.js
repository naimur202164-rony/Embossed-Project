<<<<<<< HEAD
const Product = require("../model/productModel");

=======
>>>>>>> 563455bd24d2cd0646501ebb03ce6831a4758f3e
exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "It is working fine",
  });
};
<<<<<<< HEAD

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
  } catch (error) {
    console.log(error);
  }
};
=======
>>>>>>> 563455bd24d2cd0646501ebb03ce6831a4758f3e
