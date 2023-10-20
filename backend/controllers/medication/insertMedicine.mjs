import medicationModel from "../../models/medication.js";
import sendNotificationToEveryDevice from "../../utils/sendAlert.mjs";
async function insertMedicine(defaultItem) {
    try {

        await medicationModel.insertMany(defaultItem)
        sendNotificationToEveryDevice();
        console.log("Profile Created")
    } catch (err) {
      console.log(err)
    }
  }

  export default insertMedicine;