import mongoose from "mongoose";

const URI = process.env.DB_URI;
const dbName = "patient_database";

const connect = async() => {

    const connectionState = mongoose.connect.readyState;
    connectionState === 1 ? console.log("Already Connected") : console.log("Connecting");

    try {
        mongoose.connect(URI, {
            dbName: dbName,
            bufferCommands: true
        })
        console.log("Database Connected");
    } catch(e) {
        console.log(`Error: ${e}`);
        throw e;
    }
};

export default connect;
