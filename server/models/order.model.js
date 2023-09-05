const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    address: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "Chờ gói hàng",
    },
    productOrder: [],
    total: {
      type: String,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", OrderSchema);
