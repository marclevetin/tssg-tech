// environment variables
require('dotenv').config()

// dependencies
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let Calendar = require('./model/calendar');
let Platforms = require('./model/platforms');
let Projects = require('./model/projects');
let Teams = require('./model/teams');

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

//adding the /comments route to our /api router
router.route('/calendar')
  //retrieve the calendar
  .get(function(req, res) {
  //looks at our Comment Schema
    Calendar.find(function(err, calendar) {
      if (err)
      res.send(err);
      //responds with a json object of our database comments.
      res.json(calendar)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    let calendar = new Calendar();
    //body parser lets us use the req.body
    calendar.title = req.body.title;
    calendar.when = req.body.when;
    calendar.where = req.body.where;
    calendar.join = req.body.join;
    calendar.details = req.body.details;
    calendar.save(function(err) {
      if (err)
      res.send(err);
      res.json({ message: 'Calendar item successfully added!' });
    });
  });

// Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});

// database configuration (see .env file for details)
let promise = mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds161913.mlab.com:61913/tssg-tech', {
  useMongoClient: true
})
