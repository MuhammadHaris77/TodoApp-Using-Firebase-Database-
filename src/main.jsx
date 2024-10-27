import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Layout from './Layout.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Layout/>,
  children:[
    {
      path:'',
      element: <ProtectedRoutes component={<Home/>}/>
    },
    {
      path:'/register',
      element: <Register/>
    },
    {
      path:'/login',
      element: <Login/>  
    }
  ]
  }




])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    ,
)
