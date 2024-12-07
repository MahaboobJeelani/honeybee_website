const mongoose = require('mongoose')

const honeydataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    brand: { type: String, required: true },
    imagelink: { type: String, required: true }
}, { timestamps: true })

const honeySchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 5, max: 15 },
    role: { type: String },
    cart: [honeydataSchema],
    isActive: { type: Boolean, default: false },
    earnings: { type: Number, default: 0, required: false },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'address' }]
}, { timestamps: true })

const userData = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true }
})

const orderDetails = new mongoose.Schema({
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "honeydata" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "honeyadmi" },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }
}, { timestamps: true })


const addresSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'honeyadmi' },
    address: { type: String, required: true },
    street: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})


const honeyModel = mongoose.model('honeyadmi', honeySchema)

const honeydata = mongoose.model('honeydata', honeydataSchema)

const userDatas = mongoose.model('userdata', userData)

const adminorderDetails = mongoose.model('orderdetails', orderDetails)

const addressDetails = mongoose.model('address', addresSchema)

module.exports = { honeyModel, honeydata, userDatas, adminorderDetails, addressDetails }