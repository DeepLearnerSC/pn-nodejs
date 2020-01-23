var FCM = require("fcm-node");
var serverKey = "****PLACE YOUR SERVER KEY HERE****";
var fcm = new FCM(serverKey);
var message = {
  to: "****YOUR TARGET DEVICE TOKEN****",
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
