let express = require("express");
let bodyparser = require("body-parser");
let subCategory = require("../models/subCategory.model");
let fs = require("fs");

let router = express.Router();

router.post("/save", async (req, res) => {
    try {
        let body = req.body;
        let subCat = new subCategory();
        if (body.data.id != "") {
            product = await subCategory.findById(body.data.id);
        }
        subCat.categoryId = body.data.categoryId;
        subCat.subCategory = body.data.subCategory;
        let base64image = body.data.image;
        if (base64image) {
            const randomname = (Math.random() + 1).toString(36).substring(7);
            const imageData = base64image.replace(/^data:image\/\w+;base64,/, '');
            const imageBuffer = Buffer.from(imageData, 'base64');
            subCat.imagepath = `productsubcategories/${randomname}.jpg`;
            fs.writeFile(`assets/${subCat.imagepath}`, imageBuffer, (err) => {
                if (err) {
                    console.log('Error while saving image:', err);
                    return res.status(500).json({ status: 'failed', data: 'Failed to save image' });
                }
            });
        }
        subCat.save().then(result => {
            res.end(JSON.stringify({ status: "success", data: result }));
        }, err => {
            res.end(JSON.stringify({ status: "failed", data: err }));
        });
    }
    catch {
        res.end(JSON.stringify({ status: "failed", data: "Something went wrong" }));
    }
});

router.post("/list", async (req, res) => {
    try {
        let productsubcategories = await subCategory.find();
        res.end(JSON.stringify({ status: "success", data: productsubcategories }));
    }
    catch {
        res.end(JSON.stringify({ status: "failed", data: "Something went wrong" }));
    }
});

router.post("/delete", async(req, res)=>{
    try{
        let body = req.body;
        await subCategory.findByIdAndDelete(body.data.id);
        res.end(JSON.stringify({status:"success"}));
    }
    catch{
        res.end(JSON.stringify({status:"failed", data:"Something went wrong"}));
    }
});

module.exports = router;