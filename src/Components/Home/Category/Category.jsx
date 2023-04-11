import React from 'react';

const Category = ({cate}) => {
    console.log(cate)
    const {logo,name,jobsAvailable}=cate;
    return (
        <div className='p-16 bg-slate-200 rounded'>
             <img className='bg-slate-100 p-2 rounded' src={logo} alt="" />
             <h2 className='text-2xl font-semibold my-2 '>{name}</h2>
             <p className='text-gray-600'>{jobsAvailable}</p>
        </div>
    );
};

export default Category;