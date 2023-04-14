import React from 'react';
 import Frame from '../../../public/assets/Icons/Frame.png'

const AppliedJobCart = ({product}) => {
    console.log(product)
    const {companyLogo, companyName,jobTitle,location,salary,fulltimeOrPartTime,remoteOrOnsite

    }=product
    return(
 <div>
         <div className='border-2 p-6 flex w-1/2 mx-auto justify-evenly items-center'>
        <div className='flex gap-3'>
        <img className='w-36 border' src={companyLogo} alt="" />
            <div>
            <h2 className='text-2xl font-semibold'>{jobTitle}</h2>
            <p>{companyName}</p>
          <div className='flex gap-4 my-4'>
             <img src={Location} alt="" /><span>location: {location};</span> 
          <img src={Frame} alt="" /><span>Salary:{salary}</span>
          </div>
             <div className='ms-0 py-4'>
                <button className='py-2 m-2 px-4 border-2'>{remoteOrOnsite}</button>
                <button className='py-2 m-2 px-4 border-2'>{fulltimeOrPartTime}</button>
             </div>   
            </div>
        </div>
            <div>
               <button className='btn-primary'>View Details</button>
            </div>
         </div>
 </div>
    )
};

export default AppliedJobCart;