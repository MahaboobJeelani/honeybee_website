const { honeyModel, honeydata, userDatas, adminorderDetails, addressDetails } = require('../Models/Model')
const jwt = require('jsonwebtoken')

const userRegister = async (req, resp) => {
    const { username, email, password, role } = req.body
    try {
        const newUser = new honeyModel({
            username: username,
            email: email,
            password: password,
            role: role
        })
        const saveData = await newUser.save();
        resp.status(201).json({ message: "User Created Successfully", saveData })
    } catch (error) {
        resp.send(error.message)
    }
}

const userLogin = async (req, resp) => {
    const { email, password } = req.body

    try {
        const findUser = await honeyModel.findOne({ email });

        if (!findUser) {
            resp.status(404).send('User Not Found')
        } else if (findUser.password !== password) {
            resp.status(404).send('Password is Invalid')
        } else {
            const token = jwt.sign({ findUser }, process.env.SECRET_KEY, { expiresIn: '24h' })
            resp.status(200).json({ token, message: 'Login Successfully' })
        }
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const insertHoneydata = async (req, resp) => {
    const { name, description, price, quantity, imagelink, brand } = req.body
    try {
        const createHoneydata = new honeydata({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            brand: brand,
            imagelink: imagelink
        })
        await createHoneydata.save()
        resp.status(201).send('Honey Data is created successfully')
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const getData = async (req, resp) => {
    try {
        const honeyData = await honeydata.find()
        resp.status(200).send(honeyData)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const userData = async (req, resp) => {
    const { name, email, phone, address, state } = req.body
    try {
        const createUser = new userDatas({
            name: name,
            email: email,
            phone: phone,
            address: address,
            state: state
        })
        await createUser.save()
        resp.status(201).send("User Created")
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const singleProduct = async (req, resp) => {
    const id = req.params.id
    try {
        const findProduct = await honeydata.findById(id)
        resp.status(200).send(findProduct)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const cartItems = async (req, resp) => {
    const { userid, productid } = req.params
    try {
        const user = await honeyModel.findById(userid)
        const product = await honeydata.findById(productid)
        user.cart.push(product)
        await user.save()
        resp.status(200).send(user)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const getCartItems = async (req, resp) => {
    const { userid } = req.params
    try {
        const user = await honeyModel.findById(userid)
        resp.status(200).send(user)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const removeCartItem = async (req, resp) => {
    const { userid, productid } = req.params
    try {
        const user = await honeyModel.findById(userid)
        const cart = user.cart
        cart.map(async (item) => {
            if (item._id.toString() === productid) {
                await item.deleteOne({ productid })
            }
        })
        await user.save()
        resp.send(user)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const changeQuantity = async (req, resp) => {
    const { userid, productid } = req.params
    const { quantity } = req.body
    try {
        const update = { 'cart.$.quantity': quantity };
        const updatequantityandPrice = await honeyModel.updateOne(
            { _id: userid, 'cart._id': productid }, { $set: update }
        )
        if (updatequantityandPrice.nModified === 0) {
            return resp.status(404).send('Product not found in cart or no change detected')
        }
        resp.status(200).send('cart updated successfully')
    } catch (error) {
        resp.status.send(error.message)
    }
}

const updateProduct = async (req, resp) => {
    try {
        const update = await honeydata.updateOne(req.params, { $set: req.body })
        resp.status(200).send(update)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const deleteProduct = async (req, resp) => {
    const { _id } = req.params
    try {
        const findProduct = await honeydata.findById(_id)
        if (findProduct) {
            const deleteProduct = await honeydata.deleteOne(req.params)
            resp.status(200).send("Item delete successfully")
        } else {
            resp.status(500).send("Product not found")
        }
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const totalUsers = async (req, resp) => {
    try {
        const findusers = await honeyModel.find();
        const activeUsers = findusers.filter(user => user.role !== 'admin')
        resp.status(200).send(activeUsers)
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const orderDetails = async (req, resp) => {
    const { userid } = req.params
    try {
        const findusers = await honeyModel.findById(userid);

        if (!findusers) {
            return resp.status(404).send("user not found")
        }

        const orderDetails = findusers.cart.map(item => item._id)
        const totalAmount = findusers.cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

        const orders = new adminorderDetails({
            product: orderDetails,
            user: userid,
            totalAmount: totalAmount
        })

        await orders.save();
        resp.status(200).send('Order Successfully Placed')
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const getOrderDetails = async (req, resp) => {
    const { orderid } = req.params
    try {
        const orderDetails = await adminorderDetails.find({ _id: orderid }).populate({ path: 'product' }).populate({ path: 'user', select: 'username email' });
        resp.status(200).send(orderDetails)
    } catch (error) {
        resp.status(500).send(error.message);
    }
}


const userOrder = async (req, resp) => {
    const { userid } = req.params;
    try {
        const userOrders = await adminorderDetails.find({ user: userid }).populate('product');
        resp.send(userOrders);
    } catch (error) {
        resp.status(500).send(error.message);
    }
};

const addressData = async (req, resp) => {
    const { userid } = req.params
    const { address, street, state, city, zipcode, country, phone } = req.body
    try {
        const findUser = await honeyModel.findById(userid)
        if (!findUser) {
            return resp.status(404).send("user not found");
        }
        const createAddress = new addressDetails({
            user: userid,
            address: address,
            street: street,
            state: state,
            city: city,
            zipcode: zipcode,
            country: country,
            phone: phone
        })
        await createAddress.save();
        resp.send("Address Created Successfully")
    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const getAddress = async (req, resp) => {
    try {
        const fetchAddress = await addressDetails.find().populate('user')
        resp.send(fetchAddress)
    } catch (error) {
        resp.status(500), send(error.message)
    }
}

module.exports = { userRegister, userLogin, insertHoneydata, getData, userData, singleProduct, cartItems, getCartItems, removeCartItem, changeQuantity, updateProduct, deleteProduct, totalUsers, orderDetails, getOrderDetails, addressData, getAddress, userOrder }