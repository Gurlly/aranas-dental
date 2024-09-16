import connect from "@utils/database";
import record from "@models/record";

import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();

  const patientRecord = await record.find();
  return NextResponse.json({ patientRecord }, { status: 200 });
};

export const POST = async (req) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    address,
    appointmentSchedule,
  } = await req.json();

  await connect();

  // Validates if the user is currently in the database.
  const existingRecord = await Record.findOne({ firstName, lastName, email });
  if (existingRecord) {
    return new NextResponse(
      { message: "The record already exist" },
      { status: 409 }
    );
  }

  await Record.create({
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    address,
    appointmentSchedule,
  });

  await sendSMS(firstName, appointmentSchedule, phone);

  return NextResponse.json(
    { message: "Record Added Successfully" },
    { status: 201 }
  );
};

export const PUT = async (req) => {
  const { firstName, lastName, dateOfBirth, appointmentSchedule } = await req.json();

  await connect();

  const record = await Record.findOne({
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
  });

  if (!record) {
    return NextResponse.json({ message: "Record not found" }, { status: 404 });
  }

  // Use patient's ID to update the appointmentSchedule
  await Record.findByIdAndUpdate(record._id, { appointmentSchedule });

  await sendSMS(firstName, appointmentSchedule, record.phone);

  return NextResponse.json({ message: "Appointment Updated" }, { status: 200 });
};

const sendSMS = async (name, date, phone) => {
  const SID = process.env.ACC_SID;
  const TOKEN = process.env.ACC_TOKEN;
  const PHONE = process.env.PHONE;

  const client = require('twilio')(SID, TOKEN);
  console.log(name, date, phone);

  await client.messages.create({
    body: `Good day Mr/Ms ${name}, I would like to inform you that your appointment schedule is on ${date}.`,
    from: PHONE,
    to: `+${phone}`
  })
}
