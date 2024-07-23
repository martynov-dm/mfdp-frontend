# MFDP Price Prediction Frontend

## Overview

This is the frontend application for the MFDP (Moscow Flat Data Platform) Price Prediction service. It provides a user interface for predicting real estate prices in Russia and Moscow using machine learning models.

## Live Demo

The application is deployed and can be accessed at:

```
https://mfdp-frontend-martynov-dm.amvera.io
```

## Repository

The source code for this frontend is available at:

```
https://github.com/martynov-dm/mfdp-frontend
```

## Project Structure

The project follows a typical React application structure:

- `public/`: Contains public assets including `vite.svg`
- `src/`: Main source code directory
  - `hooks/`: Custom React hooks
  - `pages/`: React components for different pages
    - `not_found/`: Components for 404 page
    - `predict/`: Components for prediction page
  - `router/`: Routing configuration
  - `services/`: API service files
    - `auth.js`: Authentication service
    - `axios-client.js`: Axios configuration for API calls
    - `predict.js`: Service for prediction API calls
  - `state/`: State management files
  - `utils/`: Utility functions
  - `App.css`: Main CSS file
  - `App.jsx`: Main React component
  - `index.css`: Global CSS
  - `main.jsx`: Entry point of the React application
  - `react-query-client.js`: React Query configuration

## Technologies Used

- React
- Vite (for build tooling)
- React Router (for routing)
- Axios (for API calls)
- React Query (for state management and data fetching)
- CSS (for styling)

## Setup and Installation

1. Clone the repository:

   ```
   git clone https://github.com/martynov-dm/mfdp-frontend.git
   ```

2. Navigate to the project directory:

   ```
   cd mfdp-frontend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port specified by Vite)

## Building for Production

To create a production build:

```
npm run build
```

This will generate a `dist` folder with the built assets.

## API Integration

This frontend application interacts with the MFDP Price Prediction API. The API endpoints and documentation can be found at:

```
API URL: https://mfdp-api-martynov-dm.amvera.io/api
API Docs: https://mfdp-api-martynov-dm.amvera.io/docs
```

## Docker

The application can be containerized using Docker. A `Dockerfile` is included in the project root.

## Configuration

Environment-specific configurations can be set in the `.env` files. Make sure to set the correct API URL for your environment.


