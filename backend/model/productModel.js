const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter the Product Description"],
  },
  brand: {
    type: String,
    required: [true, "please Enter the Brand name"],
  },
  Availability: {
    type: String,
    required: [true, "Please Enter the Availablity"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      color: {
        type: String,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
