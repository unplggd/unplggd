'use strict'

const express = require('express'),
      route   = express.Router(),
      kue     = require('kue')

route.get('/', function (req, res) {

    let queue = kue.createQueue()

    let job = queue.create('email', {
        title     : 'welcome email for tj'
        , to      : 'tj@learnboost.com'
        , template: 'welcome-email'
    }).save(function (err) {
        //if (!err) console.log(job.id);
    })

    res.send({'message': 'Welcome to our API'})
})

module.exports = route