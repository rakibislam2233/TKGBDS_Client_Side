import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = () => {
    return (
        <div>
         <ul className='flex justify-between items-center gap-5'>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>All Doner</NavLink>
            </li>
            <li>
              <NavLink>Donation Centers</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
         </ul>
        </div>
    );
};

export default NavigationLink;