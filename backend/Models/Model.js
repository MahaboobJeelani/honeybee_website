const mongoose = require('mongoose')

const honeydataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    imagelink: { type: String, required: true }
}, { timestamps: true })

const honeySchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 5, max: 15 },
    role: { type: String },
    cart: [honeydataSchema]
}, { timestamps: true })


const userData = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true }
})

const honeyModel = mongoose.model('honeyadmi', honeySchema)

const honeydata = mongoose.model('honeydata', honeydataSchema)

const userDatas = mongoose.model('userdata', userData)

module.exports = { honeyModel, honeydata, userDatas }