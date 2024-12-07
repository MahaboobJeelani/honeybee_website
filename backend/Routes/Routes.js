
const { userRegister, userLogin, insertHoneydata, getData, userData, singleProduct, cartItems, getCartItems, removeCartItem, changeQuantity, updateProduct, deleteProduct, totalUsers, orderDetails, getOrderDetails, addressData, getAddress, userOrder } = require('../Controllers/Controller')
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
routes.put('/productupdate/:_id', updateProduct);
routes.delete('/deleteproduct/:_id', deleteProduct)
routes.get('/activeusers', totalUsers)
routes.post('/placeorder/:userid', orderDetails)
routes.get('/getorder/:orderid', getOrderDetails)
routes.post('/address/:userid', addressData)
routes.get('/address', getAddress)
routes.get('/userorder/:userid', userOrder)


module.exports = routes;