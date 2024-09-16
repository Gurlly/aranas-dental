import connect from "@utils/database";
import record from "@models/record";

import { NextResponse } from "next/server";

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
