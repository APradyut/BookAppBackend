var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  mongoose = require('mongoose'),
//   Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://apiuser:apiuser@thebookcompany-mainapi-2w1jr.mongodb.net/<dbname>?retryWrites=true&w=majority'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./router'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Server running on: ' + port);