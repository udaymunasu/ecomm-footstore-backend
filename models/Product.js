let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        pcid: { type: String},
        name: { type: String},
        description: { type: String},
        specification: { type: String},
        mrp: { type: Number},
        price: { type: Number},
        varieties: [],
        instock: { type: String},
        isactive: { type: String},
        imagepath: [{
            type:String
        }]
    }
);
let Product = mongoose.model("products", schema);
module.exports = Product;