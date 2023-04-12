import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
   
    const pData= useLoaderData()
    console.log(pData)

    const cart= getShoppingCart()
    console.log(cart)
    let saveCart=[]

    for(const id in cart){
          const foundJob = pData.find(job =>job.id ===id)
          if(foundJob){
            saveCart.push(foundJob)
          }
    }
     console.log(saveCart)
    return (
        <div>
             <h2>orders:{cart.length}</h2>
        </div>
    );
    
};

export default AppliedJob;