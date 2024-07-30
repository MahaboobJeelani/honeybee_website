
const { userRegister, userLogin, insertHoneydata, getData, userData, singleProduct, cartItems, getCartItems, removeCartItem, changeQuantity } = require('../Controllers/Controller')
const express = require('express')

const routes = express.Router()

routes.post('/register', userRegister)
routes.post('/login', userLogin)
routes.post('/create', insertHoneydata)
routes.get('/honeydata', getData)
routes.post('/createuser', userData)
routes.get('/singleproduct/:id', singleProduct)
routes.put('/cartitems/:userid/:productid', cartItems)
routes.get('/user/:userid', getCartItems)
routes.delete('/deletecartitem/:userid/:productid', removeCartItem)
routes.put('/changequantity/:userid/:productid', changeQuantity)



module.exports = routes;