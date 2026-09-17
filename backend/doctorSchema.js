const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    specialization: String,
    experience: Number,
    gender: String,
    department: String
});
const Doctor = mongoose.model("Doctor",doctorSchema);
module.exports = Doctor;