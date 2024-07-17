
const { userRegister, userLogin, insertHoneydata, getData } = require('../Controllers/Controller')
const express = require('express')

const routes = express.Router()

routes.post('/register', userRegister)
routes.post('/login', userLogin)
routes.post('/create', insertHoneydata)
routes.get('/honeydata', getData)

module.exports = routes;