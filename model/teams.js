// dependencies
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// the model
let TeamsSchema = new Schema({
  name: String
});

// export module
module.exports = mongoose.model('Teams', TeamsSchema);
