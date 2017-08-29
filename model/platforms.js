// dependencies
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// the model
let PlatformsSchema = new Schema({
  team: String,
  name: String,
  description: String
});

// export module
module.exports = mongoose.model('Platforms', PlatformsSchema);
