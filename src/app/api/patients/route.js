import connect from "@utils/database";
import Patient from "@models/patient";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connect();

  const patient = await Patient.find();
  return NextResponse.json({ patient }, { status: 200 });
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
  const existingPatient = await Patient.findOne({ firstName, lastName, email });
  if (existingPatient) {
    return new NextResponse(
      { message: "The user already exist" },
      { status: 409 }
    );
  }

  await Patient.create({
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    address,
    appointmentSchedule,
  });

  return NextResponse.json(
    { message: "Patient Added Successfully" },
    { status: 201 }
  );
};

export const PUT = async (req) => {
  const { firstName, lastName, dateOfBirth, appointmentSchedule } = await req.json();
  
  await connect();

  const patient = await Patient.findOne({
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth
  });

  if (!patient) {
    return NextResponse.json({ message: "Patient not found" }, { status: 404 });
  }

  // Use patient's ID to update the appointmentSchedule
  await Patient.findByIdAndUpdate(patient._id, { appointmentSchedule });

  return NextResponse.json({ message: "Appointment Updated" }, { status: 200 });
};
