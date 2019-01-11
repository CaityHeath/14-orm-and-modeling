'use strict';

const categorySchema = require('./category-schema.js');
const dataModel = require('./model.js');

class Category extends dataModel { }

module.exports = new Category(categorySchema);
