import mongoose from "mongoose";

const URI = process.env.DB_URI;

const connect = async() => {
   try {
    mongoose.connect(URI);
    console.log("Connected to the database.");
   } catch(err) {
    console.log(`Unable to connect to the database ${err.message}`);
   }
};

export default connect;
