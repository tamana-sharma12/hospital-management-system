const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: String,
    headDoctor: String,
    description: String,
    status: {
        type: String,
        default: "Active"
    }
});

const Department = mongoose.model(
    "Department",
    departmentSchema
);

module.exports = Department;