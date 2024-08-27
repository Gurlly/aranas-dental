import { NextResponse } from "next/server"
import connect from "@utils/database";
import Patient from "@models/patient";

export const GET = async () => {
    try {
        await connect();
        const patients = await Patient.find();
        return new NextResponse(JSON.stringify(patients), {status: 200});
    } catch(err) {
        return new NextResponse(`Error in fetching the patients ${err.message}`, {
            status: 500,
        })
    }
}