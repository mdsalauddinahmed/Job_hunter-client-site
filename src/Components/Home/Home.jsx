import React, { useEffect, useState } from 'react';
import Cover from './Cover';
 
import Cat from './Category/Cat';
import { useLoaderData } from 'react-router-dom';
import Jobs from './Jobs';
 
 
 
  

const Home = () => {
     
    const [jobs,setJobs]=useState([])
       useEffect(()=>{
        fetch('JobDetail.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
       },[])
    return (
       <>
       <Cover></Cover>
       <Cat></Cat>
      <div>
      <h1 className='text-center text-4xl  py-4  font-bold'>Featured Jobs</h1>
      <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
       <div className='md:grid lg:grid-cols-2 w-3/4 mx-auto gap-12'>
        {
            jobs.map(job=><Jobs job={job}></Jobs>)
        }
       </div>
      </div>
       </>
    );
};

export default Home;