import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Routes/HomePage';
import LoginPage from './Routes/LoginPage';
import RegisterPage from './Routes/RegisterPage';
import NotFoundPage from './Routes/NotFoundPage';
import QuemSomos from './Routes/QuemSomos';
import InfoCar from './Components/InfoCar';
import Pagamento from './Components/Pagamento';
import VeiculosPage from "./Routes/VeiculosPage";
import AdminTerminal from "./Routes/AdminTerminal";
import PrivateRoute from "./Components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "aboutus",
        element: <QuemSomos />,
      },
      {
        path: "Veiculos",
        element: <VeiculosPage />,
      },
      {
        path: "infoCar/:id",
        element: <InfoCar />,
      },
      {
        path: "pagamento/",
        element: <Pagamento />
      },
      {
        path: "adminterminal/",
        element: <PrivateRoute component={AdminTerminal} />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);