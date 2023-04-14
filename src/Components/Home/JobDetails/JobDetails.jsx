import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams  } from 'react-router-dom';
 

const JobDetails = () => {
    
     const allJob=useLoaderData()
     const[value,setValue]=useState({})
     const id =useParams();
     useEffect(()=>{
        const jobs=allJob.find(job=>job.id == id.id)
        setValue(jobs)
     },[])
   console.log(value)
   const {jobDescription,jobResponsibility,experiences,educationalRequirements,salary,jobTitle,phone,email,location}=value
   
  const handleOrder = () => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
        localStorage.setItem("orders",JSON.stringify([...storedData,value]))
    }else{
        localStorage.setItem("orders",JSON.stringify([value]))
    }

  }



    
    return (

        <div>
            <h2 className='text-center text-6xl mb-16'>
                Job Details
            </h2>
              
        <div className='grid lg:grid-cols-2 w-9/12 gap-4 mx-auto  '>
             <div>
               <h1 className='text-2xl my-4'> <span className='font-semibold'>Job Description</span> {jobDescription}</h1>
               <h2 className='text-2xl my-4'><span className='font-semibold'>Job Responsibility:</span> {jobResponsibility}</h2>
               <p className='text-2xl my-4'><span className='font-semibold'>Educational Requirements:</span> {educationalRequirements }</p>
               <p className='text-2xl my-4'><span className='font-semibold'>Experiences:</span> {experiences}</p>
             </div>
             <div>
                  <div className='p-10 bg-neutral-700 border text-white'>
                
                    <span className='my-10'>Salary:{salary}</span> <br />
                    <span>Job Title:{jobTitle}</span> 
                    <hr />
                    <h1>Contact Information:</h1>
                    <hr />
                     <span>{phone}</span> <br />
                     <span>{email}</span>
                     <span>{location}</span>
                      <br />
                  </div>
                  
                 <button onClick={handleOrder} className='btn-primary w-full'>Apply now</button>
                
             </div>


        </div>
        </div>
    );
};

export default JobDetails;