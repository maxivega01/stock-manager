# 📖 Stock Manager

## 📝 Overview
Stock Manager is a full-stack inventory management system that allows users to **add, update, and delete** products. It features a modern UI built with **React + Chakra UI**, a backend built with **Node.js + Express**, and a **MongoDB database** for storing product data.

Public URL: [Stock Manager](https://stock-manager-production.up.railway.app)

---

## 📂 Project Structure
```
StockManager/
│── frontend/                # React frontend with Chakra UI
│   │── src/
│   │   │── components/       # Reusable UI components (ProductCard, Navbar, etc.)
│   │   │── pages/            # Pages like Home, Create Product 
│   │   │── store/            # State management (with Zustand)
│   │   │── App.jsx           # Main entry point
│   │   └── main.jsx          # Renders React app
│   │── public/               # Static assets
│   │── package.json          # Dependencies for frontend
│   └── vite.config.js        # Vite configuration
│── backend/                  # Node.js + Express backend
│   │── config/
│   │   └── db.js             # Database connection
│   │── models/
│   │   └── Product.model.js  # Mongoose schema for products
│   │── routes/
│   │   └── product.route.js  # Express routes for API
│   │── controllers/
│   │   └── product.controller.js  # Handles CRUD logic
│   └──server.js             # Express server
│   
│── .env                      # Environment variables (not shown)
│── README.md                 # Project documentation
└── .gitignore                # Files to ignore in Git
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB 
- npm or yarn

### Installation
Clone the repository:
```sh
git clone https://github.com/maxivega01/stock-manager.git
cd stock-manager
```

Create a `.env` file in the `backend/` directory:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the build and start commands:
```sh
npm run build
npm run start
```

---

## 🚀 Usage

### API Endpoints (Backend)
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | /api/products    | Get all products         |
| POST   | /api/products    | Add a new product        |
| PUT    | /api/products/:id | Update product details  |
| DELETE | /api/products/:id | Delete a product        |

Example Request (Add Product):
```sh
POST /api/products
Content-Type: application/json

{
  "name": "iPhone 14",
  "price": 999,
  "image": "https://example.com/iphone14.jpg"
}
```

---

## 🎨 Frontend Components

### Key Components
| Component     | Description |
|--------------|------------|
| `ProductCard` | Displays individual products |
| `NavBar` | Top navigation bar |
| `ProductGrid` | Grid layout for displaying products |
| `Dialog` | Modal used for editing products |
| `Toaster` | Notifications for success/errors |

### State Management
- Uses **Zustand** for global state.
- Product actions (add/update/delete) are handled in `store/product.js`.

---

## 🛠️ Deployment

### Deploying to Railway
1. **Sign up at [Railway](https://railway.app/)** and create a new project.
2. Link the project to your **GitHub repository**.
3. Add environment variables in Railway under **Settings > Variables**:
   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=production
   ```
4. Click **Deploy**, and Railway will automatically build and host the project.

**Note:** Since `.env` files are not included in GitHub (for security reasons), you must manually set these variables in Railway.

Public URL: [Stock Manager](https://stock-manager-production.up.railway.app)

---

## 🛑 Common Issues & Fixes

### ❌ Chakra UI Build Error
**Error:**
```sh
ERROR: No matching export for "forwardRef" from @chakra-ui/react
```
**Fix:**
```sh
npm install @chakra-ui/icons@2.0.8
```
To ensure every user installs the correct version, **add this version to package.json**:
```json
"dependencies": {
  "@chakra-ui/icons": "2.0.8"
}
```
Run:
```sh
npm install
```

### ❌ Missing `.env` Variables in Deployment
**Error:**
```sh
Error: The `uri` parameter to `openUri()` must be a string, got "undefined".
```
**Fix:**
- Ensure `.env` is **not ignored** in local development.
- Add all environment variables in **Railway's settings**.

---

## 🔥 Future Improvements
- **User Authentication** (Login, Sign-up)
- **Product Categories & Filters**
- **Analytics Dashboard**
- **Role-based Permissions**

---

## 💡 Contributors & Contact
Made by [Máximo Vega]. 
GitHub: [[maxivega01](https://github.com/maxivega01)]

