const mongoose = require("mongoose");

const RecordSchema = new Schema(
  {
    patientname: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleInitial: {
        type: String,
        required: true,
      },
    },
    age: { type: Number, required: true },
    birthdate: { type: Date, required: true },
    phone: {
      type: String,
      required: true,
      minlength: 12,
      maxlength: 12,
      match: /^[0-9]+$/,
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

module.exports =
  mongoose.model("Record", RecordSchema) || mongoose.models.Record;
