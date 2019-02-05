//App.js
const express = require('express');
const app = express();
//Socket.io has to use the http server
const server = require('http').Server(app);

const io = require('socket.io')(server);
io.on("connection", (socket) => {
  // This file will be read on new socket connections
  require('./sockets/chat.js')(io, socket);
});

//Express View Engine for Handlebars
const exphbs = require('express-handlebars');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
  })
);
app.set('view engine', 'hbs');

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.hbs');
});

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
});
