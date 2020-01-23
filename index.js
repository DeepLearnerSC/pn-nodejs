const express = require('express')
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./routes');
const app = express();

app.use(bodyParser.json()); 
app.use (
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 *1000,
    keys: 'supersexy'
  })
);

require('./routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

