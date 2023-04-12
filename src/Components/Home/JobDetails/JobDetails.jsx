import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';

const JobDetails = () => {
    
    const [value,setValue]=useState({});
    const id =useParams();
    console.log(id)
    const allJob= useLoaderData();
    console.log(allJob)
    useEffect(()=>{
        const SingleJob = allJob.find(pd=>pd.id ==id.id)

         setValue(SingleJob)
    },[])
  console.log(value)
  const addAppliedJob=(id)=>{
       addToDb(value.id)


  }


    const {experiences, educationalRequirements,fulltimeOrPartTime,jobDescription,jobResponsibility,jobTitle,salary,phone,location,email}=value



    
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
                  
                 <button onClick={()=>addAppliedJob(id)} className='btn-primary w-full'>Apply now</button>
                
             </div>


        </div>
        </div>
    );
};

export default JobDetails;