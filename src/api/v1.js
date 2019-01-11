'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();

router.param('model', modelFinder);


// ROUTES
router.get('/api/v1/:model', fetch);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', fetchOne);
router.put('/api/v1/:model/:id', putOne);
router.delete('/api/v1/:model/:id', deleteOne);

// FUNCTIONS
function fetch(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function fetchOne(request,response,next) {
  let id = request.params.id;
  request.model.get(id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function handlePost(request,response,next) {
console.log(request.model);
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


function putOne(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function deleteOne(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
