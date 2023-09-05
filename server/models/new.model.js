const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewSchema = new Schema(
  {
    title: {
      type: String,
    },
    imageNew: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("New", NewSchema);
