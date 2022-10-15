// Express server for the project as a whole, should keep the webpage runtime up

const express = require('express');
const app = express();
//Commone open port for TCP is port 80 - but use 8080 for now
const port = 8080;

app.use(express.static('src'));

//TODO: we'll need to not manually add pages at some point
app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/src/about.html');
});

app.listen(port, () => {
  console.log(`BlindLite app listening on port ${port}`)
})