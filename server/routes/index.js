//const fs   = require('fs'),
//      path = require('path')
//      url  = require('url')
//
//
//let isRouteFile = function (file) {
//    // Is a .js file
//    let isJsFile = path.extname(file).toLowerCase() === ".js"
//
//    // Not index.js file
//    let isNotIndexFile = path.basename(file).toLowerCase() !== "index.js"
//    return isJsFile && isNotIndexFile
//}
//
//let config = function (app) {
//
//    let files = fs.readdirSync(path.join(__dirname, 'api'))
//        .filter(isRouteFile)
//
//    for (let index in files) {
//        let file       = files[index]
//        let controller = require(path.join(__dirname, 'api', file))
//        let route = url.resolve('/api/', path.basename(file, '.js'))
//        app.use(route, controller)
//    }
//}
//
//module.exports = {
//    config: config
//}

import { Router } from 'express'

import test from './test'

var router = Router()

// Add USERS Routes
router.use(test)

