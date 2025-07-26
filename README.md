
# 🛒 Next.js E-Commerce App


A modern eCommerce web application built with **Next.js App Router**, **Redux Toolkit**, and **JWT-based cookie authentication**.

---

Live Demo : https://coder-71-assesment.vercel.app/

## 🚀 Features

- 🔐 Authentication
  - JWT-based login system (cookie-based storage)
  - Persistent login state on refresh
  - Protected routes (e.g., `/cart` `/products/[id]` only for logged-in users)

- 🛍️ Cart Functionality
  - Add, remove, and update item quantities
  - Cart persists in `localStorage`
  - Toast notifications using `react-toastify`

- 🛍️ Search Functionality
  - Search with keystokes

- 🧾 Products
  - Product listing
  - Individual product detail view
  - `Add to Cart` with real-time feedback

- ⚙️ Tech Stack
  - **Frontend**: Next.js (App Router)
  - **State Management**: Redux Toolkit
  - **Styling**: Tailwind CSS
  - **Notifications**: React Toastify

---



## 🧑‍💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/A-S-M-Sohag-Abdullah/coder-71-assesment.git
cd coder-71-assesment
```
### 2. Install dependencies
```
npm install
```
### 3. Setup environment variables
```
JWT_SECRET=1234567890
```
### 4. Run the app
```
npm run dev
```

