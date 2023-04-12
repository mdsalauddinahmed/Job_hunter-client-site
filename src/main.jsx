import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Home/Statistics'
import AppliedJob from './Components/Home/AppliedJob'
import Blog from './Components/Home/Blog'
import JobDetails from './Components/Home/JobDetails/JobDetails'
const router=createBrowserRouter([
  {
     path:'/',
     element:<App></App>,
     children:[
      {
        path:'/',
        element:<Home></Home>,
         
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
        path:'/:id',
        element:<JobDetails></JobDetails>,
        loader:({params}) =>fetch(`JobDetail.json/`)
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
     ]
    } 
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}></RouterProvider>
  
)
