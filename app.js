//App.js
const express = require('express');
const app = express();
//Socket.io has to use the http server
const server = require('http').Server(app);

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

app.get('/', (req, res) => {
  res.render('index.hbs');
});

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
});
