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
        

        const handleFilter = (event) => {
          const value = event.target.value;
          const filterData = orders.filter((item) => item.remoteOrOnsite == value );
          setFilterOrder(filterData)
        }


    return (
        <div className=''>
          <div className='text-center py-10'>
          <h1 className='text-5xl'> Applied Jobs</h1>
         <h1 className='my-3'>Number of Applied Job: {filterOrder.length}</h1>
          </div>


          <div className="my-3">
      <div className='w-1/2 mx-auto'>
    <button>
    <label htmlFor="">sorted by: </label>
        <select onChange={handleFilter} className="select select-bordered max-w-xl  ">
          <option disabled selected></option>
          <option value="Remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
    </button>
      </div>
      </div>
            
     <div className=''>

     { filterOrder.length>0?( filterOrder?.map(product => <AppliedJobCart product={product}></AppliedJobCart>)
       
      ):(
        <h1 className='text-3xl text-center'>No applied Job</h1>
      )
      
      } 

     </div>
        </div>
    );
 };
 
 export default AppliedJob;