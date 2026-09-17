const mongoose = require("mongoose");
const prescriptionSchema = new mongoose.Schema({
    patient : String,
    doctor : String,
    medicien: String,
    dosage:String,
    frequency:String,
    duration:String,
    instruction:String,
    status:{
        type:String,
        default:"Active"
    }
});
const Presciption = mongoose.model(
    "presciption",
    prescriptionSchema
);
module.exports = Presciption;