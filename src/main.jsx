import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Home/Statistics'
import AppliedJob from './Components/Home/AppliedJob'
import Blog from './Components/Home/Blog'
const router=createBrowserRouter([
  {
     path:'/',
     element:<App></App>,
     children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'applied',
        element:<AppliedJob></AppliedJob>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
     ]
    },
    {
     path:'/about',
     element: <h1>About page</h1> 
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}></RouterProvider>
  
)
