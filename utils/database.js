const mongoose = require("mongoose");

const URI = process.env.DB_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.error(`Database connection failed: ${e}`);
    throw new Error("Database connection error");
  }
};

module.exports = connect;