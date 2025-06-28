// const honeyRoutes = require('./Routes/Routes')
// const express = require('express')
// const mongoose = require('mongoose')
// const bodyparser = require('body-parser')
// const cors = require('cors')
// const cookieparser = require('cookie-parser')
// require('dotenv').config()
// const path = require("path");

// const app = express()
// app.use(bodyparser.json())
// app.use(express.json())
// app.use(cors())
// app.use(cookieparser())

// const _dirname = path.resolve()

// mongoose.connect('mongodb://0.0.0.0:27017/honeydatabase')
//     .then(() => { console.log('Database is connected with node js application ') })
//     .catch((error) => console.log(error.message))

// app.use('/api', honeyRoutes)

// app.use(express.static(path.join(_dirname, '..', 'frontend', 'build')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on the port http://localhost:${process.env.PORT}/`);
// })




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

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
  socketTimeoutMS: 45000, // 45 seconds socket timeout
})
.then(() => console.log('Database connected successfully'))
.catch(err => 
  console.error('Connection error:', err.message));

app.use('/', honeyRoutes)

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port http://localhost:${process.env.PORT}/`);
})
