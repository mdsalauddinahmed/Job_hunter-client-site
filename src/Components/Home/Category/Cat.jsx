import React from 'react';

import  { useEffect, useState } from 'react';
import Category from './Category';
const Cat = () => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
       fetch('Category.json')
       .then(res=>res.json())
       .then(data=>setCategory(data))
    },[])

    return (
        <div className='mt-24'>
         <div className='text-center'>
         <h1 className='text-4xl font-bold py-4 '>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
           <div className='lg:flex justify-center m-2 gap-12 my-12'>
           {
            category.map(cate=><Category cate={cate}></Category>)
            }
            
           </div>
        </div>
    );
};

export default Cat;


 