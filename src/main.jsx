import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Pages/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Products from './Components/Products'
import ProductDetail from './Components/ProductDetail'
import About from './Pages/About'
import LogIn from './Components/LogIn'
import Register from './Pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'product/:id',
        element: <ProductDetail></ProductDetail>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
