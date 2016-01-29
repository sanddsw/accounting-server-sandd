var mongoose = require('mongoose');

module.exports = function(name, schema) {
  mongoose.model(name, new mongoose.Schema(schema));
};

