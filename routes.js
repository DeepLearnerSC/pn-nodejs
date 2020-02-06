const { handler } = require("./handler");

module.exports = app => {
  app.get("/", (req, res) => {
    handler("TRIGGERING PUSH");
    res.send(
      "Welcome to Push Notification Testing. REFRESH THE BROWSER TO TRIGGER PUSH"
    );
  });
};
