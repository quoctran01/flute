const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DiscountSchema = new Schema({
    discountCode: {
        type: String,
        require: true
    },
    percentDiscount: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model("Discounts", DiscountSchema);