require("dotenv").config();
const mongoose = require('mongoose');
const clc=require("cli-color");
const connectDB = async () => {
  try {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
     }).then(() => {
      console.log(clc.cyanBright.bold('connected to db'));
       }).catch((err) => {
        console.log(err.message);
         });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB; 