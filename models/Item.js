const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    brand: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    UPC: {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    PLU: {
        type:Number,
        required: false
    },
    expiration: {
        type: Date,
        required: false
    },
    byWeight:{
        type: Boolean,
        default: false
    },
    weight:{
        type: Number,
        required: false
    },
    category:{
        type: String,
        required: false
    }

});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;