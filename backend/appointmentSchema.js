const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({

    patient: String,

    doctor: String,

    date: String,

    time: String,

    reason: String,

    status: {
        type: String,
        default: "Pending"
    }

});

const Appointment = mongoose.model(
    "Appointment",
    appointmentSchema
);

module.exports = Appointment;