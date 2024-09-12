const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  totalAmount: {
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  buyer: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    contact: {
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
    },
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      amount: {
        value: {
          type: Number,
          required: true,
        },
      },
      totalAmount: {
        type: Number,
        required: true,
      },
    },
  ],
  redirectUrl: {
    success: {
      type: String,
      required: true,
    },
    failure: {
      type: String,
      required: true,
    },
    cancel: {
      type: String,
      required: true,
    },
  },
  requestReferenceNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("orderedItems", orderSchema);
