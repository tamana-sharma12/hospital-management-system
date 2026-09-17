const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./userSchema");
const Patient = require("./patientSchema");
const Doctor = require("./doctorSchema");
const Department = require("./departmentSchema");
const Appointment = require("./appointmentSchema");
const Prescription = require("./prescriptionSchema");
require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is Running");
});


//register
app.post("/register",async(req,res)=>{
    try{
        const {name,email,phone,role,password}= req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            phone,
            role,
            password:hashedPassword
        });
        res.status(201).json({
            message:"User Register Successfully",
            user:user
        });
    }
    catch(error){
        res.status(500).json({
            message:"Registration failed",
            error:error.message
        });
    }
});
//login
app.post("/login", async(req,res)=>{
    try {
        const{email,password} = req.body;
        const user = await User.findOne({email:email});

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password
);

if (!isPasswordCorrect) {
    return res.status(401).json({
        message: "Invalid password"
    });
}
        res.status(200).json({
            message:"Login successful",
            user:user
        });
    } catch (error) {
        res.status(500).json({
            message:"Login Failed",
                error:error.message
        });
    }
});

//patients
app.post("/patients",async(req,res)=>{
    try {
        const{name,email,phone,age,gender,address} = req.body;
        const patient = await Patient.create({
            name,
            email,
            phone,
            age,
            gender,
            address
        });
        res.status(201).json({message:"Patient added successfully",
            patient:patient
        }) ;
    } catch (error) {
        res.status(500).json({message:"Patient registration failed",
            error :error.message
        })
        
    }
})
//get patient
app.get("/patients",async(req,res)=>{
    try {
        const patients = await Patient.find();
        res.status(200).json({
            message:"Patients Fetched Successfully",
            patients:patients
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Failed to Fetched patient",
            error:error.message
        });
    }
});


//delete patients
app.delete("/patients/:id", async(req,res)=>{
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if(!patient){
            return res.status(404).json({
                message:"Patient not found"
            });
        }
        res.status(200).json({
            message:"Patient deleted successfully"
        });
    } catch (error) {
        res.status(500).json({message:"Failed to delete patient",error:error.message});
        
    }
});
//edit patients
app.put("/patients/:id", async (req, res) => {

    try {

        const { name, email, phone, age, gender, address } = req.body;

        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                phone,
                age,
                gender,
                address
            },
            { new: true }
        );

        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.status(200).json({
            message: "Patient updated successfully",
            patient: patient
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to update patient",
            error: error.message
        });

    }

});
// Docter//
//Add Doctor
app.post("/doctors",async (req,res)=>{
    try {
        const{
            name,
            email,
            phone,
            specialization,
            experience,
            gender,
            department
        }=req.body;
        
        const doctor = await Doctor.create({name,email,phone,specialization,experience,gender,department});
res.status(201).json({message:"Doctor added successfully",doctor:doctor});
    } catch(error){
        res.status(500).json({message:"Doctor registration failed",error:error.message});
    }
});
// doctor fetch get api
app.get("/doctors",async(req,res)=>{
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ message:"Doctors Fetched successfully",
            doctors:doctors
        });
    } catch (error) {
        res.status(500).json({message:"Failed to fetch doctors",error:error.message});
        
    }
})

//Doctors update api
app.put("/doctors/:id", async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            specialization,
            experience,
            gender,
            department
        } = req.body;

        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                phone,
                specialization,
                experience,
                gender,
                department
            },
            { new: true }
        );

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }

        res.status(200).json({
            message: "Doctor updated successfully",
            doctor: doctor
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to update doctor",
            error: error.message
        });

    }

});

//Delete Doctor APi
app.delete("/doctors/:id", async (req, res) => {

    try {

        const doctor = await Doctor.findByIdAndDelete(req.params.id);

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }


        res.status(200).json({
            message: "Doctor deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete doctor",
            error: error.message
        });
    }

});
// =========================
// ADD APPOINTMENT
// =========================

app.post("/appointments", async (req, res) => {

    try {

        const {
            patient,
            doctor,
            date,
            time,
            reason,
            status
        } = req.body;


        const appointment = await Appointment.create({

            patient,
            doctor,
            date,
            time,
            reason,
            status: status || "Pending"

        });


        res.status(201).json({

            message: "Appointment added successfully",

            appointment: appointment

        });

    } catch (error) {

        res.status(500).json({

            message: "Appointment registration failed",

            error: error.message

        });

    }

});

// =========================
// GET ALL APPOINTMENTS
// =========================

app.get("/appointments", async (req, res) => {

    try {

        const appointments = await Appointment.find();

        res.status(200).json({

            message: "Appointments fetched successfully",

            appointments: appointments

        });

    } catch (error) {

        res.status(500).json({

            message: "Failed to fetch appointments",

            error: error.message

        });

    }

});


// =========================
// DELETE APPOINTMENT
// =========================

app.delete("/appointments/:id", async (req, res) => {

    try {

        const appointment = await Appointment.findByIdAndDelete(
            req.params.id
        );

        if (!appointment) {

            return res.status(404).json({

                message: "Appointment not found"

            });

        }

        res.status(200).json({

            message: "Appointment deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: "Failed to delete appointment",

            error: error.message

        });

    }

});


// =========================
// UPDATE APPOINTMENT
// =========================

app.put("/appointments/:id", async (req, res) => {

    try {

        const {
            patient,
            doctor,
            date,
            time,
            reason,
            status
        } = req.body;


        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,

            {
                patient,
                doctor,
                date,
                time,
                reason,
                status
            },

            { new: true }
        );


        if (!appointment) {

            return res.status(404).json({

                message: "Appointment not found"

            });

        }


        res.status(200).json({

            message: "Appointment updated successfully",

            appointment: appointment

        });

    } catch (error) {

        res.status(500).json({

            message: "Failed to update appointment",

            error: error.message

        });

    }

});


app.post("/departments", async (req, res) => {
    try {
        const { name, headDoctor, description, status } = req.body;

        const department = await Department.create({
            name,
            headDoctor,
            description,
            status: status || "Active"
        });

        res.status(201).json({
            message: "Department added successfully",
            department: department
        });

    } catch (error) {
        res.status(500).json({
            message: "Department registration failed",
            error: error.message
        });
    }
});

app.get("/departments", async (req, res) => {
    try {
        const departments = await Department.find();

        res.status(200).json({
            message: "Departments fetched successfully",
            departments: departments
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch departments",
            error: error.message
        });
    }
});

app.put("/departments/:id", async (req, res) => {
    try {
        const { name, headDoctor, description, status } = req.body;

        const department = await Department.findByIdAndUpdate(
            req.params.id,
            {
                name,
                headDoctor,
                description,
                status
            },
            { returnDocument: "after" }
        );

        if (!department) {
            return res.status(404).json({
                message: "Department not found"
            });
        }

        res.status(200).json({
            message: "Department updated successfully",
            department: department
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update department",
            error: error.message
        });
    }
});

app.delete("/departments/:id", async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(
            req.params.id
        );

        if (!department) {
            return res.status(404).json({
                message: "Department not found"
            });
        }

        res.status(200).json({
            message: "Department deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete department",
            error: error.message
        });
    }
});

// =========================
// ADD PRESCRIPTION
// =========================

app.post("/prescriptions",async(req,res)=>{
    try {
        const{
            patient,
            doctor,
            medictine,
            dosage,
            frequency,
            duration,
            instructions,
            status
        }= req.body;
        const prescription = await Prescription.create({
            patient,
            doctor,
             medictine,
            dosage,
            frequency,
            duration,
            instructions,
            status:status || "Active"
        });
        res.status(201).json({
            message:"Prescription added successfully",
            prescription:prescription
        });

    } catch (error) {
        res.status(500).json({
            message:"Prescription registration failed",
            error:error.message
        });
        
    }
});
app.put("/prescriptions/:id", async (req, res) => {
    try {
        const {
            patient,
            doctor,
            medicine,
            dosage,
            frequency,
            duration,
            instructions,
            status
        } = req.body;

        const prescription = await Prescription.findByIdAndUpdate(
            req.params.id,
            {
                patient,
                doctor,
                medicine,
                dosage,
                frequency,
                duration,
                instructions,
                status
            },
            { returnDocument: "after" }
        );

        if (!prescription) {
            return res.status(404).json({
                message: "Prescription not found"
            });
        }

        res.status(200).json({
            message: "Prescription updated successfully",
            prescription: prescription
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update prescription",
            error: error.message
        });
    }
});

//DELETE API
app.delete("/prescriptions/:id", async (req, res) => {
    try {
        const prescription = await Prescription.findByIdAndDelete(
            req.params.id
        );

        if (!prescription) {
            return res.status(404).json({
                message: "Prescription not found"
            });
        }

        res.status(200).json({
            message: "Prescription deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete prescription",
            error: error.message
        });
    }
});

// GET PRESCRIPTIONS
// =========================

app.get("/prescriptions", async (req, res) => {
    try {

        const prescriptions = await Prescription.find();

        res.status(200).json({
            message: "Prescriptions fetched successfully",
            prescriptions: prescriptions
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch prescriptions",
            error: error.message
        });

    }
});


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});


