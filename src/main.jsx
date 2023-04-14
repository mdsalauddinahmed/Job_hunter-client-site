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
import ErrorPage from './Components/ErrorPage'
const router=createBrowserRouter([
  {
     path:'/',
     element:<App></App>,
     children:[
      {
        path:'/',
        element:<Home></Home>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:()=>fetch(`JobDetail.json`)
         
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'applied',
        element:<AppliedJob></AppliedJob>,
        loader:() =>fetch(`JobDetail.json`)
      },
      {
        path:'/:id',
        element:<JobDetails></JobDetails>,
        loader:  ({params}) => fetch('JobDetail.json')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
     ]
    } ,
    {
      path:"*",
      element:<ErrorPage></ErrorPage>
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}></RouterProvider>
  
)
