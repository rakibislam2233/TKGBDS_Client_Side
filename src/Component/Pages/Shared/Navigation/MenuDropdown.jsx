import React from 'react';
import { Link } from 'react-router-dom';

const MenuDropdown = () => {
    return (
        <div className='flex gap-3 items-center'>
            <Link><button className='py-2 px-5 font-semibold text-white bg-rose-500'>Register</button></Link>
            <Link><button className='py-2 px-5 font-semibold text-white bg-rose-500'>Login</button></Link>
        </div>
    );
};

export default MenuDropdown;