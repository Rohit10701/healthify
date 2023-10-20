import express from "express";
import userModel from "../../models/user.js";
import cors from "cors";
import insertProfile from './insertProfile.mjs'
import updateProfile from './updateProfile.mjs'
const app = express();
app.use(cors());
async function userProfile(req, res) {
  try {
    const { username, email } = req.body;

    let usrData = {
      username: username,
      email: email,
      caretaker: "",
      isPatient: true,
      number: ""
    };
    console.log(usrData);
    let user1 = new userModel(usrData);

    let defaultItem = [user1];

    insertProfile(defaultItem, email);
    // Send a response
    res.json({ message: "User details received successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error registering user" });
  }
}

async function userUpdate(req, res) {
	const { username, email, caretaker, isPatient, number} = req.body

	let usrData = {
        caretaker : caretaker,
        isPatient : isPatient,
        number : number
	}
	let user1 = new userModel(usrData)

	let defaultItem = [user1]

	updateProfile(defaultItem, email)

	res.json({ message: 'user details updated!' })
}

export default {userProfile, userUpdate}
