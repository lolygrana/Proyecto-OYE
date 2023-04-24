import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './config/router';
import UserProvider from './Context/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
