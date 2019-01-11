'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const product = mongoose.Schema({
  name: { type:String, required:true },
  category: {type:String, required: true},
});

module.exports = mongoose.model('product', product);
