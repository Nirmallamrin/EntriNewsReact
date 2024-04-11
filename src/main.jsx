import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './Root.jsx'
import Trending from './components/Trending.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/trending",
        element: <Trending />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
