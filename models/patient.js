import { mongoose, Schema } from "mongoose";

const PatientSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
    phone: String,
    address: String,
    appointmentSchedule: Date
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.models.Patient || mongoose.model("Patient", PatientSchema);

export default Patient;
