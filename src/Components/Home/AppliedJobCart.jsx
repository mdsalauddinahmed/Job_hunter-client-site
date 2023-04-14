import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJobCart = ({product}) => {
    console.log(product)
    const {companyLogo, companyName,jobTitle,location,salary,fulltimeOrPartTime,remoteOrOnsite

    }=product
    return(
 <div>
           <h1>{companyLogo}</h1> 
        <h1>{companyName}</h1>
 </div>
    )
};

export default AppliedJobCart;