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

### Demo Video

[![Watch the video](https://img.youtube.com/vi/HWRWR5fBlUg/0.jpg)](https://www.youtube.com/watch?v=HWRWR5fBlUg)


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

<img width="1536" height="486" alt="image" src="https://github.com/user-attachments/assets/e215ffa0-3394-4b70-950b-53d4e8ded325" />

### 2. Product Creation Form (Frontend)

<img width="1538" height="300" alt="image" src="https://github.com/user-attachments/assets/51a53732-e476-45dd-8629-b6c7353daa90" />


### 3. User Registration Component

<img width="1447" height="413" alt="image" src="https://github.com/user-attachments/assets/9953d3bc-a4ff-4eaf-8584-1dfaf723a5a3" />


### 4. Admin Dashboard Stats

<img width="1586" height="387" alt="image" src="https://github.com/user-attachments/assets/67b83bfd-8997-4e5e-b381-a6d81b968b55" />


## How to Run

1. Clone the repository.
2. Set up `.env` with your MongoDB URI and HTTP port.
3. Run build: `npm run build`
4. Run backend: `npm run dev`

## License

MIT
