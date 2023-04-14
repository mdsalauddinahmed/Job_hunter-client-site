import React from 'react';
import Location from '../../../assets/Icons/Location.png'
import Frame from '../../../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const Jobs = ( {job}) => {
     
    const {companyLogo,companyName,jobTitle,fulltimeOrPartTime,salary,remoteOrOnsite,location,id
       
    }= job
    // console.log(props.product)
    return (
        <div className='border-2 mt-10 p-6'>
            <img className='w-36' src={companyLogo} alt="" />
            <h2 className='text-2xl font-semibold'>{job.jobTitle}</h2>
            <p>{companyName}</p>
          <div className='flex gap-4 my-4'>
             <img src={Location} alt="" /><span>location: {location};</span> 
          <img src={Frame} alt="" /><span>Salary:{salary}</span>
          </div>
             <div className='ms-0 py-4'>
                <button className='py-2 m-2 px-4 border-2'>{remoteOrOnsite}</button>
                <button className='py-2 m-2 px-4 border-2'>{fulltimeOrPartTime}</button>
             </div> 
            
        <Link to={`../${id}`}><button  className='btn-primary'>View Details</button></Link>
        
        </div>
    );
};

export default Jobs;