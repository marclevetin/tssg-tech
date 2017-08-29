// dependencies
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// the model
let ProjectsSchema = new Schema({
  team: String,
  project: String,
  description: String
});

// export module
module.exports = mongoose.model('Projects', ProjectsSchema);
