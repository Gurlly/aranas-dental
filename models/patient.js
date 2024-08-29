import { Schema, model, models } from "mongoose";

const PatientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    appointmentSchedule: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = models.Patient || model('Patient', PatientSchema);

