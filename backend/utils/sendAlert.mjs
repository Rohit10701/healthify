// Import necessary modules

import { scheduleJob } from "node-schedule";
import medicationModel from "../models/medication.js";
import sendEamil from "./sendEmail.mjs";
import sendWhatsapp from "./sendWhatsapp.mjs";
import sendSMS from './sendSMS.mjs'
async function sendNotificationToEveryDevice() {
  function sendNotification(medication) {
    sendEamil(medication);
    sendWhatsapp(medication);
    sendSMS(medication);
    console.log(`Sending notification for medication: ${medication.name}`);
  }

  medicationModel
    .find({})
    .then((medications) => {
      medications.forEach((medication) => {
        //cron-job
        {medication.freq != "8" ? 
          //sun - sat
          (scheduleJob(
          `${parseInt(medication.minute)} ${parseInt(
            medication.hour
          )} * * ${parseInt(medication.freq)}`,
          () => sendNotification(medication )

        )):
        //daily
        (scheduleJob(
          `${parseInt(medication.minute)} ${parseInt(
            medication.hour
          )} * * *`,
          () => sendNotification(medication )
        ))
        
      }
        console.log(medication);
      });
    })
    .catch((err) => {
      console.error(`Error fetching medication reminders: ${err}`);
    });
}

export default sendNotificationToEveryDevice;
