const { honeyModel, honeydata, userDatas } = require('../Models/Model')

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
            resp.status(200).json({ "login": true, message: 'Login Successfully' })
        }

    } catch (error) {
        resp.status(500).send(error.message)
    }
}

const insertHoneydata = async (req, resp) => {
    const { name, description, price, quantity, imagelink } = req.body
    try {
        const createHoneydata = new honeydata({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
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
        console.log(productid);
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


const removeCartItem = async (req, res) => {
    const { userid, productid } = req.params;

    try {
        const user = await honeyModel.findById(userid);

        if (!user) {
            return res.status(400).send("User not found");
        }

        user.cart = user.cart.filter(item => item._id.toString() !== productid);

        await user.save();

        res.status(200).send('Item deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = { userRegister, userLogin, insertHoneydata, getData, userData, singleProduct, cartItems, getCartItems, removeCartItem }