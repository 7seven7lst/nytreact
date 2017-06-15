const express = require('express');
const bodyParser = require("body-parser");
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = Promise;

const app = express();
// Log activity
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Database configuration with mongoose
mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

const apiRoutes = require('./server/routes/api.route');
app.use('/api', apiRoutes);



const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

const io = require('socket.io')(server);

io.on('connection', (socket) => { 
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('subscribe', function(room) { 
    console.log('joining room', room);
    socket.join(room); 
  })

  socket.on('unsubscribe', function(room) {  
    console.log('leaving room', room);
    socket.leave(room); 
  })

})

global.io = io;
