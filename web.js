'use strict'

import Nuxt from 'nuxt'
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import kue from 'kue'
import api from './server/routes/api'

//const routes = require('./server/routes')

const app = express()

// Queue

let queue = kue.createQueue()

let job = queue.create('email', {
    title     : 'welcome email for tj'
    , to      : 'tj@learnboost.com'
    , template: 'welcome-email'
}).save(function (err) {
    //if (!err) console.log(job.id);
})

app.use('/queue', kue.app)

// API

app.use('/api', api)

//routes.config(app)

// App

app.use(bodyParser.json())

/* eslint-disable no-console */

app.use(express.static(path.join(__dirname, './assets')))

const isProd = process.env.NODE_ENV === 'production'

let config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt    = new Nuxt(config);
const promise = (isProd ? Promise.resolve() : nuxt.build())

promise.then(() => {
    app.use(nuxt.render);
    app.listen(3000)
})
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
