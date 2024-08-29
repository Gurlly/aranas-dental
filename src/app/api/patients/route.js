import { NextResponse } from "next/server";
import connect from "@utils/database";
import Patient from "@models/patient";

export const GET = async () => {
  try {
    await connect();
    const patients = await Patient.find();
    return new NextResponse.json(patients, { status: 200 });
  } catch (err) {
    return new NextResponse(`Error in fetching the patients ${err.message}`, {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  try {
    await connect();
    const data = await req.json();
    const newPatient = new Patient(data);
    await newPatient.save();
    return new NextResponse.json({ message: 'Patient added successfully' }, { status: 200 });
  } catch (e) {
    return new NextResponse(`Error creating new patient: ${e.message}`, {
      status: 500,
    });
  }
};
