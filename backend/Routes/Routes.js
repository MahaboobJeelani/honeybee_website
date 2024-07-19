
const { userRegister, userLogin, insertHoneydata, getData, userData } = require('../Controllers/Controller')
const express = require('express')

const routes = express.Router()

routes.post('/register', userRegister)
routes.post('/login', userLogin)
routes.post('/create', insertHoneydata)
routes.get('/honeydata', getData)
routes.post('/createuser', userData)

module.exports = routes;