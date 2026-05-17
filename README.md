# 🚗 MotoGrid — Car Dealership Admin Portal

MotoGrid is a React-based e-commerce administrator portal for managing a car dealership inventory. It allows administrators to manage car listings, update pricing, search inventory, and handle product information — all in one place.

---

## 📸 Preview

> Admin dashboard showing total cars, active listings, premium cars, and inventory value with a featured car section and latest inventory table.

---

## ✨ Features

- 🏠 **Dashboard** — Overview of total cars, active listings, premium cars and inventory value
- 🚗 **Cars Listing** — Browse all 20 cars with search and filter functionality
- 🔍 **Dynamic Search** — Search cars in real time by name or type
- ➕ **Add Car** — Admin can add new cars to the inventory
- ✏️ **Edit Car** — Admin can update car details and pricing
- 🗑️ **Delete Car** — Admin can remove cars from inventory
- 📄 **Car Details** — Full product page with specifications and contact options
- 📞 **Contact Sales** — Call, WhatsApp or Email the sales team directly
- 🔐 **Admin Login** — Secure admin portal with login functionality
- 🌙 **Light/Dark Mode** — Toggle between light and dark themes
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend framework |
| React Router DOM | Client side routing |
| Vite | Build tool and dev server |
| JSON Server | Mock REST API backend |
| Axios | HTTP requests |
| Vitest | Testing framework |
| React Testing Library | Component testing |
| CSS | Styling and responsive design |

---

## 👥 Team — Group 3

| Person | Role | Files |
|---|---|---|
| Person 1 | Project setup + routing | App.jsx, main.jsx, Navbar.jsx, Sidebar.jsx |
| Person 2 | Home page UI | Home.jsx, FeaturedCar.jsx, App.css |
| Person 3 | Cars listing + search | Cars.jsx, CarCard.jsx, SearchBar.jsx |
| Person 4 | Add/Edit car + CRUD | AddCar.jsx, EditCar.jsx, CarForm.jsx, api.js, db.json |
| Person 5 | State management + testing + docs | CarContext.jsx, useFetchCars.jsx, CarCard.test.jsx, README.md |

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have these installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/victor-kidiga/group-3.git
cd group-3
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server (Mock Backend)

Open a new terminal and run:

```bash
npx json-server --watch db.json --port 3000
```

This starts the mock backend at:

http://localhost:3000/cars
http://localhost:3000/settings

### 4. Start the React App

In another terminal run:

```bash
npm run dev
```

Open your browser and go to:
http://localhost:5173


---

## 🧪 Running Tests

```bash
npm run test
```

### Test Coverage

| Test | What It Checks |
|---|---|
| renders car name correctly | Car name displays on screen |
| renders car price formatted with KSh | Price shows with KSh symbol |
| renders transmission type | Transmission displays correctly |
| renders fuel type | Fuel type displays correctly |
| renders model year | Model year displays correctly |
| renders car image with correct alt text | Image renders correctly |
| renders Buy button | Buy button is visible |
| calls onBuy when Buy button is clicked | Buy button triggers action |
| does not show Edit and Remove for non-admin | Normal users cannot see admin buttons |
| shows Edit and Remove buttons for admin | Admin can see management buttons |
| calls onDelete when Remove button is clicked | Remove button triggers delete |
| calls onEdit when Edit button is clicked | Edit button triggers edit |

---

## 📁 Project Structure


GROUP-3/
├── src/
│   ├── components/
│   │   ├── CarCard.jsx        # Car display card component
│   │   ├── CarForm.jsx        # Reusable car form component
│   │   ├── FeaturedCar.jsx    # Featured car on home page
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── SearchBar.jsx      # Search input component
│   │   └── Sidebar.jsx        # Side navigation menu
│   │
│   ├── context/
│   │   └── CarContext.jsx     # Global state management
│   │
│   ├── hooks/
│   │   └── useFetchCars.jsx   # Custom hook for fetching cars
│   │
│   ├── pages/
│   │   ├── AddCar.jsx         # Add new car page
│   │   ├── AdminLogin.jsx     # Admin login page
│   │   ├── CarDetails.jsx     # Single car details page
│   │   ├── Cars.jsx           # All cars listing page
│   │   ├── EditCar.jsx        # Edit car page
│   │   └── Home.jsx           # Dashboard home page
│   │
│   ├── services/
│   │   └── api.js             # All API calls to JSON Server
│   │
│   ├── tests/
│   │   └── CarCard.test.jsx   # CarCard component tests
│   │
│   └── setupTests.js          # Testing environment setup
│
├── db.json                    # Mock database with 20 cars
├── vite.config.js             # Vite and Vitest configuration
└── package.json               # Project dependencies and scripts

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /cars | Get all cars |
| GET | /cars/:id | Get one car by ID |
| POST | /cars | Add a new car |
| PATCH | /cars/:id | Update a car |
| DELETE | /cars/:id | Delete a car |
| GET | /settings | Get store settings |

---

## 🗄️ Data Structure

### Car Object

```json
{
  "id": "1",
  "name": "Toyota Corolla",
  "image": "https://cdn.imagin.studio/...",
  "price": 2500000,
  "modelYear": 2022,
  "description": "A reliable and fuel-efficient sedan.",
  "transmission": "Automatic",
  "fuelType": "Petrol",
  "fuelConsumption": "16 km/l"
}
```

### Settings Object

```json
{
  "salesPhone": "+254 116196302",
  "salesEmail": "sales@motogrid.com"
}
```

---

## 🔐 Admin Access

To access admin features:
1. Click **Login** in the top navigation
2. Enter admin credentials
3. Admin features unlocked:
   - Add new cars
   - Edit car details and pricing
   - Delete cars from inventory
   - Manage listings

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Start dev server | `npm run dev` | Starts React app on port 5173 |
| Build for production | `npm run build` | Creates production build |
| Run tests | `npm run test` | Runs all test suites |
| Start JSON Server | `npx json-server --watch db.json --port 3000` | Starts mock backend |

---

## 🌐 State Management

The app uses React Context API for global state management:

- **CarContext** — Provides cars data to all components
- **useFetchCars** — Custom hook for fetching cars from the API
- **useCarContext** — Custom hook to access context from any component

### How It Works
db.json (20 cars)
↓
useFetchCars fetches cars from API
↓
CarContext stores and shares cars globally
↓
All components access cars directly
├── Home.jsx — shows featured cars
├── Cars.jsx — shows all cars
├── AddCar.jsx — adds new car
├── EditCar.jsx — updates car
└── CarCard.jsx — displays each car

---

## 🧠 Key Technical Decisions

### Why React Context?
Avoids prop drilling — all components access car data directly without passing props through multiple layers.

### Why JSON Server?
Provides a full REST API without a real backend — perfect for development and demonstration.

### Why Vitest?
Since the project uses Vite, Vitest integrates seamlessly and runs faster than Jest in this environment.

### Why Custom Hooks?
Encapsulates reusable logic — any component can fetch cars with one line instead of repeating fetch logic everywhere.

### Why try/catch in async functions?
Network requests can fail. try/catch ensures the app shows a friendly error message instead of crashing when the server is unavailable.

---

## 🔗 Links

- **GitHub Repository:** https://github.com/victor-kidiga/group-3
- **JSON Server Docs:** https://github.com/typicode/json-server
- **React Docs:** https://react.dev
- **Vitest Docs:** https://vitest.dev
- **React Testing Library:** https://testing-library.com

---

## 📝 License

This project was built as a summative lab project for Moringa School — Phase 3 Module 3.

---

*Built with ❤️ by Group 3 — Moringa School*

