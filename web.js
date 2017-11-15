'use strict'

import {Nuxt, Builder} from 'nuxt'
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
app.use(express.static(path.join(__dirname, './assets')))

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
const host = process.env.HOST || '127.0.0.1'
const port = config.env.port
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console


