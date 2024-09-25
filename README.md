# Country Info Application

This application provides country details such as borders, population data, and flag images. It includes both a **backend** (API server) and a **frontend** (React app) that work together to display information fetched from external APIs.

## Features

- Display country details based on country code.
- List all available countries.
- Fetch and display population data and flag images for each country.
- Responsive and user-friendly UI.

## Technologies Used

- **Backend**: Node.js, Express.js, Axios
- **Frontend**: React, React Router, Axios, Material-UI
- **Environment Variables**: `.env` files for secure storage of sensitive data.

---

## Table of Contents

1. [Requirements](#requirements)
2. [Installation and Setup](#installation-and-setup)
3. [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)
5. [Testing](#testing)
6. [Project Structure](#project-structure)

---

## Requirements

- **Node.js** (v14 or higher)
- **NPM** (or **Yarn**) for package management
- **React** (v17 or higher)
  
---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/country-info-app.git
cd country-info-app
```

### 2. Install Dependencies

#### Backend:
Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

#### Frontend:
Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
```

---

## Environment Variables

### Backend:

Create a `.env` file inside the `backend` directory with the following content:

```bash
BASE_URL=https://date.nager.at/api/v3
POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries/population
FLAG_API_URL=https://countriesnow.space/api/v0.1/countries/flag/images
PORT=3000
```

- `BASE_URL`: The base URL for fetching country information.
- `POPULATION_API_URL`: The API URL for retrieving population data.
- `FLAG_API_URL`: The API URL for retrieving flag images.
- `PORT`: The port where your backend server will run.

### Frontend:

Create a `.env` file inside the `frontend` directory with the following content:

```bash
REACT_APP_API_BASE_URL=http://localhost:3000
```

- `REACT_APP_API_BASE_URL`: The base URL where the backend API is running (e.g., `http://localhost:3000`).

---

## Running the Application

### 1. Start the Backend Server

Navigate to the `backend` directory and start the server:

```bash
cd backend
npm run dev
```

This will start the backend server on `http://localhost:3000`.

### 2. Start the Frontend Server

Open a new terminal, navigate to the `frontend` directory, and start the React app:

```bash
cd frontend
npm start
```

This will start the React app on `http://localhost:3001` (or another port if `3001` is in use). Make sure the backend is running before starting the frontend as it depends on the API for fetching data.

---

## Testing

### Backend:

To run backend tests (if available), navigate to the `backend` directory and run:

```bash
npm test
```

### Frontend:

To run frontend tests (if available), navigate to the `frontend` directory and run:

```bash
npm test
```

---

## Project Structure

```bash
country-info-app/
├── server/                  # Node.js (Express) backend API
│   ├── server.js            # Main backend server logic
│   ├── package.json         # Backend dependencies and scripts
│   ├── .env                 # Backend environment variables
└── client/                  # React frontend
    ├── src/                 # React source files
    │   ├── pages/           # Pages (CountryList, CountryInfo)
    │   ├── styles/          # Styles for UI (CountryList, CountryInfo)
    │   ├── App.js           # Main React app entry point
    ├── public/              # Public assets (index.html, favicon)
    ├── package.json         # Frontend dependencies and scripts
    ├── .env                 # Frontend environment variables
```

---

## Notes

- Ensure that both the **frontend** and **backend** servers are running.
- Use `.env` files to securely store sensitive data like API keys.
- You can customize styles using Material-UI components or by adding your own CSS.