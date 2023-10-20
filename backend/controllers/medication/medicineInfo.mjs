import express from "express";
import medicationModel from "../../models/medication.js";
import cors from "cors";
import insertMedicine from './insertMedicine.mjs'
const app = express();
app.use(cors());
async function userMedicine(req, res) {
  try {
    const { name, email, hour, minute, freq, caretaker, number  } = req.body;

    let usrData = {
      name: name,
      email: email,
      hour: hour,
      minute : minute,
      freq: freq,
      caretaker: caretaker,
      number: number,
    };
    console.log(usrData);
    let user1 = new medicationModel(usrData);

    let defaultItem = [user1];

    insertMedicine(defaultItem);
    // Send a response
    res.json({ message: "Medicine details received successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error registering medicine" });
  }
}

export default {userMedicine}
