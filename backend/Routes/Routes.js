
const { userRegister, userLogin, insertHoneydata, getData, userData, singleProduct } = require('../Controllers/Controller')
const express = require('express')

const routes = express.Router()

routes.post('/register', userRegister)
routes.post('/login', userLogin)
routes.post('/create', insertHoneydata)
routes.get('/honeydata', getData)
routes.post('/createuser', userData)
routes.get('/singleproduct/:id', singleProduct)

module.exports = routes;