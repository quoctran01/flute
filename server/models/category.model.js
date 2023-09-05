const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  categoryCode: {
    type: String,
    require: true,
  },
  categroyName: {
    type: String,
    require: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },
  ],
});

module.exports = mongoose.model("Categries", CategorySchema);
