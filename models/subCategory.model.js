let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let schema = new Schema(
    {
        categoryId: { type: String },
        subCategory: { type: String },
        imagepath:{type:String}
    }
);
let ProductSubcategory = mongoose.model("subproductcategories", schema);
module.exports = ProductSubcategory;