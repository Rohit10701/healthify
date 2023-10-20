

import request from "request";

async function sendWhatsapp(medication){

    var options = {
      method: 'POST',
      url: 'https://api.ultramsg.com/instance65731/messages/chat',
      headers: {'content-type': ' application/x-www-form-urlencoded'},
      form: {
        "token": "t0ih3foq6h9rul5z",
        "to": medication.number,
        "body": `Time to take your medicine ${medication.name}`,
        "priority": 1,
        "referenceId": "",
        "msgId": "",
        "mentions": ""
    }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
}

export default sendWhatsapp;

