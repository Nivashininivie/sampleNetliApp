const express = require('express')
const app = express()
 const bodyParser = require('body-parser')
// const delegates = require("../delegates/delegates")
const hostname = '127.0.0.1';
const port = 3000;
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('hello world');
});
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
