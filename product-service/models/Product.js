const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: Date
})

module.exports = Product = mongoose.model("product", ProductSchema)