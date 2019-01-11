'use strinct'


module.exports = (req, res, next) => {
  let modelName = req.params.model;
  console.log(modelName);
  req.model = require(`../models/${modelName}.js`);

  next();
};