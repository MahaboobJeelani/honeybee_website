# HoneyBee Farm Website

## Project Objective

This application is designed to digitize and streamline the management and sales of honey products for a honeybee farm. It provides a modern web interface for farm owners, admins, and customers to interact, manage products, and make purchases.

## Why was this application developed?

- To help honeybee farm owners manage their products, orders, and users efficiently.
- To provide customers with a convenient way to browse, order, and learn about natural honey products.
- To promote natural honey and educate users about beekeeping and honey production.

## What is the use of this application?

- **Farm Owners/Admins:** Add, edit, and delete products; view sales statistics; manage orders and users.
- **Customers:** Browse honey products, place orders, view order history, and contact the farm.
- **General Users:** Learn about honeybee farming and honey products.

## Who can use this application?

- Honeybee farm owners and administrators.
- Customers interested in purchasing honey products.
- Anyone interested in learning about honeybee farming.

## Main Features

- Product catalog and details
- User and admin registration/login
- Admin dashboard with sales stats
- Cart and order management
- Payment and invoice tracking
- Contact form for inquiries

## Project Structure

```
honeybee_website/
├── backend/
│   ├── Server.js
│   ├── Controllers/
│   ├── Models/
│   └── Routes/
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Cssfile/
│   │   ├── Images/
│   │   └── Store/
│   ├── public/
│   └── build/
├── .env
└── package.json
```

## Example Code Screenshots

### 1. Backend Server Setup

```js
// filepath: backend/Server.js
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
```

### 2. Product Creation Form (Frontend)

```jsx
// filepath: frontend/src/Pages/CreateProduct.jsx
<form action='button' className='createfrom' onSubmit={createHandler} >
    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
    <input type="text" placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
    <input type="text" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
    <input type="number" placeholder='Enter Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
    <input type="text" placeholder='Enter Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
    <input type="text" placeholder='Enter Image Link' value={imagelink} onChange={(e) => setImagelink(e.target.value)} />
    <button type='submit' className='createbtn'>Create Product</button>
</form>
```

### 3. User Registration Component

```jsx
// filepath: frontend/src/Components/Userregister.jsx
const registerUser = (e) => {
    e.preventDefault()
    const payload = {
        username: username,
        email: email,
        password: password,
        role: 'user'
    }
    axios.post(`http://localhost:8081/register`, payload)
        .then((res) => {
            navigation('/userlogin')
            console.log("Resgister successfully", res);
        })
        .catch((error) => {
            console.log(error.message);
        })
}
```

### 4. Admin Dashboard Stats

```jsx
// filepath: frontend/src/Components/Admintotal.jsx
<div className='dashboardmenu totalmenulist totalorder'>
    <p><FaChartPie /></p>
    <p>5,000 <MdOutlineCurrencyRupee /> <br /> <span>Total Value of Sale</span></p>
</div>
<div className='dashboardmenu totalmenulist totalusers'>
    <p><SlGraph /></p>
    <p>{earnings}<MdOutlineCurrencyRupee /> <br /> <span>Your Balances</span></p>
</div>
```

## How to Run

1. Clone the repository.
2. Set up `.env` with your MongoDB URI and HTTP port.
3. Run backend: `npm run dev`
4. Run frontend: `npm start` in the `frontend` directory.

## License

MIT
