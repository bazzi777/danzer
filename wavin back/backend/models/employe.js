const mongoose = require("mongoose")

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Category: String,
    Place: String,
})

var EmployeModel = mongoose.model("employe", schema)

module.exports = EmployeModel 