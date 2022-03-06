// Express server for the project as a whole, should keep the webpage runtime up

const express = require('express');
const app = express();
//Commone open port for TCP is port 80
const port = 80;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'public/index.html');
});

app.listen(port, () => {
  console.log(`BlindLite app listening on port ${port}`)
})