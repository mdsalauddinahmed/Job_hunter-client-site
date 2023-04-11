 import React from 'react';
import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
 
 const App = () => {
  return (
    <div>
      <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
     
    </div>
  );
 };
 
 export default App;