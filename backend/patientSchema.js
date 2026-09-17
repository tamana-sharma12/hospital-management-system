const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    age:String,
    gender:String,
    address:String
});
const Patient = mongoose.model("Patient",patientSchema);
module.exports = Patient;