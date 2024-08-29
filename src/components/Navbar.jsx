import React from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full h-[45px] bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(0,0,0,0.15)] backdrop-blur-[24px] flex items-center justify-center z-[999]'>
            <a href="http://">
                <img src={Logo} alt="Logo" className='h-5 dark:invert' />
            </a>
        </nav>
    );
}

export default Navbar;