const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_nodejs");
    console.log("DB Connected!");
  } catch (error) {
    console.log("DB Connect Failed!");
  }
}

module.exports = { connect };
