const mongoose = require('mongoose')

const honeySchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 5, max: 15 },
    role: { type: String }
}, { timestamps: true })


const honeydataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imagelink: { type: String, required: true }
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