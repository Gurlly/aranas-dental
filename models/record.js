const mongoose = require("mongoose");

const PatientRecordSchema = new mongoose.Schema(
  {
    patientName: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      middleInitial: {
        type: String,
        required: true,
        maxlength: 1,
      },
    },
    age: { 
      type: Number, 
      required: true,
      min: 0,
      max: 120
    },
    birthdate: { type: Date, required: true },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^[\d\s\-+()]{10,20}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
        match: /^[0-9]+$/,
      },
    },
    schedule: { type: Date },
  },
  {
    timestamps: true,
  }
);

const PatientRecord =  mongoose.models.PatientRecord || mongoose.model("PatientRecord", PatientRecordSchema);

module.exports = PatientRecord;
