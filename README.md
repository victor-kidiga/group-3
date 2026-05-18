# MotoGrid

MotoGrid is a React-based e-commerce admin portal for selling cars.

## Features

- Home page dashboard
- View all cars
- Search and filter cars
- Add new car
- Edit car details
- Delete car
- React Router navigation
- JSON Server support for local development
- Browser storage fallback for static deployments

## Technologies Used

- React
- React Router
- Vite
- Axios
- JSON Server
- CSS

## How to Run Locally

Install dependencies:

```bash
npm install
```

Start the JSON Server backend:

```bash
npm run server
```

Start the React app in another terminal:

```bash
npm run dev
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
