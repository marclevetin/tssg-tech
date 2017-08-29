// dependencies
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// the model
let CalendarSchema = new Schema({
  title: String,
  when: String,
  where: String,
  join: String,
  details: String
});

// export module
module.exports = mongoose.model('Calendar', CalendarSchema);
