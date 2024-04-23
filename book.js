const mongoose = require("mongoose")

const Bookschema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
})

const Bookmodel = mongoose.model("book", Bookschema);
module.exports = Bookmodel