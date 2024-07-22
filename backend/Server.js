const honeyRoutes = require('./Routes/Routes')
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(bodyparser.json())
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/honeydatabase')
    .then(() => { console.log('Database is connected with node js application ') })
    .catch((error) => console.log(error.message))

app.use('/', honeyRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port http://localhost:${process.env.PORT}/`);
})