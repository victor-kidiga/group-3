# MotoGrid - Car Dealership Admin Portal

MotoGrid is a React-based e-commerce administrator portal for managing a car
dealership inventory. It allows administrators to manage car listings, update
pricing, search inventory, and handle product information in one place.

## Preview

Admin dashboard showing total cars, active listings, premium cars, inventory
value, a featured car section, and the latest inventory table.

## Features

- Dashboard overview for total cars, active listings, premium cars, and inventory value
- Cars listing with search and filter functionality
- Real-time search by name, description, model year, fuel type, or transmission
- Add new cars to the inventory
- Edit car details and pricing
- Delete cars from inventory
- Full car details page with specifications and contact options
- Admin login for protected management features
- Light and dark theme support
- Responsive desktop and mobile layout
- Browser storage fallback for static Vercel deployments

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend framework |
| React Router DOM | Client-side routing |
| Vite | Build tool and dev server |
| JSON Server | Mock REST API backend |
| Axios | HTTP requests |
| Vitest | Testing framework |
| React Testing Library | Component testing |
| CSS | Styling and responsive design |

## Team - Group 3

| Person | Role | Files |
|---|---|---|
| Person 1 | Project setup and routing | App.jsx, main.jsx, Navbar.jsx, Sidebar.jsx |
| Person 2 | Home page UI | Home.jsx, FeaturedCar.jsx, App.css |
| Person 3 | Cars listing and search | Cars.jsx, CarCard.jsx, SearchBar.jsx |
| Person 4 | Add/Edit car and CRUD | AddCar.jsx, EditCar.jsx, CarForm.jsx, api.js, db.json |
| Person 5 | State management, testing, and docs | CarContext.jsx, useFetchCars.jsx, CarCard.test.jsx, README.md |

## Getting Started

### Prerequisites

Make sure you have these installed:

- Node.js v18 or higher
- npm v9 or higher
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/victor-kidiga/group-3.git
cd group-3
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server

Open a new terminal and run:

```bash
npm run server
```

This starts the mock backend at:

```txt
http://localhost:3001/cars
http://localhost:3001/settings
```

### 4. Start the React App

In another terminal, run:

```bash
npm run dev
```

Open your browser and go to:

```txt
http://localhost:5173
```

## API Configuration

The app reads car data from `VITE_API_URL` when that variable is available.

For local development, the default API URL is:

```txt
http://localhost:3001
```

For Vercel, add this environment variable only if you have deployed a real backend:

```txt
VITE_API_URL=https://your-backend-url
```

If no production API URL is configured, the deployed app uses the cars bundled in
`db.json` and stores add/edit/delete changes in the browser's `localStorage`.
That keeps the Vercel demo from going blank, but those changes are per browser
and are not shared between users.

## Running Tests

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

## Project Structure

```txt
GROUP-3/
├── src/
│   ├── components/
│   │   ├── CarCard.jsx
│   │   ├── CarForm.jsx
│   │   ├── FeaturedCar.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   └── CarContext.jsx
│   ├── hooks/
│   │   └── useFetchCars.jsx
│   ├── pages/
│   │   ├── AddCar.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── CarDetails.jsx
│   │   ├── Cars.jsx
│   │   ├── EditCar.jsx
│   │   └── Home.jsx
│   ├── services/
│   │   └── api.js
│   ├── tests/
│   │   └── CarCard.test.jsx
│   └── setupTests.js
├── db.json
├── vite.config.js
└── package.json
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /cars | Get all cars |
| GET | /cars/:id | Get one car by ID |
| POST | /cars | Add a new car |
| PUT | /cars/:id | Update a car |
| DELETE | /cars/:id | Delete a car |
| GET | /settings | Get store settings |

## Data Structure

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

## Admin Access

To access admin features:

1. Click **Login** in the top navigation.
2. Enter the admin password.
3. Admin features are unlocked:

- Add new cars
- Edit car details and pricing
- Delete cars from inventory
- Manage listings

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Start dev server | `npm run dev` | Starts React app on port 5173 |
| Build for production | `npm run build` | Creates production build |
| Run tests | `npm run test` | Runs all test suites |
| Start JSON Server | `npm run server` | Starts mock backend on port 3001 |

## State Management

The app uses React Context API for global state management:

- `CarContext` provides car data to components.
- `useFetchCars` fetches cars from the API.
- Components can access shared car data without prop drilling.

## Key Technical Decisions

### Why React Context?

It avoids prop drilling, so components can access car data without passing props
through several layers.

### Why JSON Server?

It provides a full REST API without a real backend, which is useful for
development and demonstration.

### Why the Vercel fallback?

Vercel hosts the React frontend, but it does not automatically run the local
JSON Server. The fallback prevents the deployed app from showing a blank cars
section when no production API is configured.

### Why Vitest?

Since the project uses Vite, Vitest integrates cleanly and runs quickly.

## Links

- GitHub Repository: https://github.com/victor-kidiga/group-3
- JSON Server Docs: https://github.com/typicode/json-server
- React Docs: https://react.dev
- Vitest Docs: https://vitest.dev
- React Testing Library: https://testing-library.com

## License

This project was built as a summative lab project for Moringa School - Phase 3
Module 3.
