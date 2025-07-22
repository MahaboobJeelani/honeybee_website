const honeyRoutes = require('./Routes/Routes')
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config()
const path = require("path");

const app = express()
app.use(bodyparser.json())
app.use(express.json())
app.use(cors())
app.use(cookieparser())

// const _dirname = path.resolve()

mongoose.connect(process.env.MONGODB_URI)
    .then(() => { console.log('Database is connected with node js application ') })
    .catch((error) => console.log(error.message))

app.use('/api', honeyRoutes)

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(process.env.HTTP, () => {
    console.log(`Server is running on the port http://localhost:${process.env.HTTP}/`);
})