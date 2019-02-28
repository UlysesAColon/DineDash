const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

var http = require('http')
var server = http.Server(app);

// Bodyparser Middleware
app.use(bodyParser.json());

//  DB Config
const db = require('./config/keys.js').mongoURI;


// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected....'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

var path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.get('*', function(req, res){
  res.sendFile(path.resolve('client/public/index.html'));
  res.sendFile(path.join(__dirname + '/../client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

