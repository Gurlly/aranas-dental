import connect from "@utils/database";
import PatientRecord from "@models/record";
import { NextResponse } from "next/server";

// Get all data in the collection
export const GET = async () => {
  await connect();
  const patientRecords = await PatientRecord.find();

  return new NextResponse.json({ patientRecords }, { status: 200 });
};

// Add new record in the collection
export const POST = async (req) => {
  await connect();
  const { patientName, age, birthdate, phone, address, schedule } = await req.json();

  // Validation if the data exist using the user phone.
  const existingRecord = await PatientRecord.findOne({phone});

  if (existingRecord) {
    return new NextResponse({ error: "Record already exists" }, { status: 409 });
  }

  await PatientRecord.create({
    patientName: {
      firstName: patientName.firstName,
      lastName: patientName.lastName,
      middleInitial: patientName.middleInitial
    },
    age,
    birthdate,
    phone,
    address: {
      street: address.street,
      city: address.city,
      province: address.province,
      zip: address.zip
    },
    schedule
  });


  return NextResponse.json({ message: "Adding Record Successfuly "}, { status: 201 });
};

/*
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
*/
