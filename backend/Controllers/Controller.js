const { honeyModel, honeydata } = require('../Models/Model')

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
    const { name, description, imagelink } = req.body
    try {
        const createHoneydata = new honeydata({
            name: name,
            description: description,
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


module.exports = { userRegister, userLogin, insertHoneydata, getData }