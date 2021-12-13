const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const RowSchema = new Schema ({
    position: {
        type: Number,
        required: true
    },
    items: [{
        type: Schema.Types.Number,
        ref: "Item.UPC",
    }]
});

const Row = mongoose.model("Row", RowSchema);

module.exports = Row;