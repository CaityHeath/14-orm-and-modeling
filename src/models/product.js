'use strict';

const schema = require('./product-schema.js');
const dataModel = require('./model.js');

class Product extends dataModel { }

module.exports = new Product(schema);