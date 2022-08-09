const mongoose = require('mongoose');

//sub document
const seller = new mongoose.Schema({
    sellerName: {type: String, required:false},
    phoneNumber: {type: Number, required:false},
    email: {type: String, required:false}
});

const phoneSchema = new mongoose.Schema({
    brand: {type: String, required:true},
    model: {type: String, required:true},
    price: {type: Number, required:true},
    storage: {type: String, required:true},
    color: {type: String, required:true},
    sellers: seller
});

var phoneModel = mongoose.model("Phone", phoneSchema, "mystore" );
module.exports = {
    phoneModel
}