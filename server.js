// dependencies
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

// instances
let app = express();
let router = express.Router();

// sets the port for express
let port = process.env.API_PORT || 3001;

// configures API to use bodyParser and look for JSON data in request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
// and remove cacheing
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

// set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
