import React from 'react';
import group from  '../../../assets/Icons/Group.png'

const Footer = () => {
    return (
       <div className='bg-zinc-800 m-2 p-16'>
         <div className='grid md:grid-cols-2 lg:grid-cols-5 w-3/4 mx-auto  text-white gap-12'>
             <div >
               <h3 className='text-4xl'>Job_Hunter</h3>
               <p className='my-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
               <img src={group}alt="" />
             </div>
             <div>
                <ul>
                    <li className='text-4xl  mb-3 '>Company</li>
                    <li>About us</li>
                    <li>work</li>
                    <li>Latest news</li>
                    <li>careers</li>
                </ul>
             </div>
             <div>
                <ul>
                    
                <li className='text-4xl  mb-3 '>Product</li>
                    <li>About us</li>
                    <li>work</li>
                    <li>Latest news</li>
                    <li>careers</li>
                </ul>
             </div>
             <div>
                <ul>
                    
                <li className='text-4xl  mb-3 '>Support</li>
                    <li>About us</li>
                    <li>work</li>
                    <li>Latest news</li>
                    <li>careers</li>
                </ul>
             </div>
             <div>
                <ul>
                    
                <li className='text-4xl  mb-3 '>Contact</li>
                    <li className='my-3'>524 Broadway , NYC</li>
                    <li>+1 777 - 978 - 5570</li>
                     
                </ul>
             </div>
        </div>
       </div>
    );
};

export default Footer;