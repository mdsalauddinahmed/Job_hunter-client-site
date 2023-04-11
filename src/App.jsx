 import React from 'react';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';
 
 const App = () => {
  return (
    <div>
       <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
     <Outlet></Outlet>
    </div>
  );
 };
 
 export default App;