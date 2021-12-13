const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const ShelfSchema = new Schema({
    position: {
        type: Number,
        required: true
    },
    rows: [{
        type: Number,
        ref: "Row.position"
    }]
});

const Shelf = mongoose.model("Shelf", ShelfSchema);

module.exports = Shelf;