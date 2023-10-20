import twilio from "twilio";
const accountSid = 'AC058887e0773cabb48a6c3fad5f7ba459';
const authToken = '20c8c85f8f7694e2d9be4cf61bcff9e6';
const client = twilio(accountSid, authToken);

export default async function sendSMS(medication) {
  client.messages
    .create({
      body: `Time to take medicine ${medication.name} `,
      from: "+12672449787",
      to: medication.number,
    })
    .then((message) => {
        console.log(`Message sent with SID: ${message.sid}`);
      })
      .catch((error) => {
        console.error(`Error sending message: ${error}`);
      });
}
