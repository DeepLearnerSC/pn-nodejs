// import { serverKey, sampleRegisterToken } from "./config";
var FCM = require("fcm-node");
var serverKey = "****PLACE YOUR SERVER KEY HERE****"; // replace with your serverKey
var fcm = new FCM(serverKey);
var message = {
  to: "****YOUR TARGET DEVICE TOKEN****", // replace with your sampleRegisterToken
  notification: {
    title: "Sla---am Dunk!",
    body: "...🍏👌"
  }
};

exports.handler = (event, context, callback) => {
  // const {message} = event
  fcm.send(message, function(err, response) {
    if (err) {
      console.log("Something has gone rogue!");
    } else {
      console.log(
        "Successfully sent message! This is what `response` looks like ",
        response
      );
    }
  });
};
