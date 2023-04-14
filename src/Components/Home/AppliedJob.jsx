 import React, { useEffect, useState } from 'react';
 
import Jobs from './Jobs';
import AppliedJobCart from './AppliedJobCart';
 
 const AppliedJob = () => {
     
    
        const [orders, setOrders] = useState([]);
        const [filterOrder, setFilterOrder] = useState([]);
      
        useEffect(() => {
          const storedData = JSON.parse(localStorage.getItem("orders"));
          if (storedData) {
            setOrders(storedData);
            setFilterOrder(storedData);
          }
        }, []);
        console.log(orders)
        console.log(filterOrder)


    return (
        <div>
            <h1>hello world</h1>
         <h1>{filterOrder.length}</h1>
            
     {
        filterOrder?.map(product => <AppliedJobCart product={product}></AppliedJobCart>
      )} 
        </div>
    );
 };
 
 export default AppliedJob;