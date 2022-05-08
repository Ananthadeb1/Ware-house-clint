import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    // console.log(currentYear);
    return (
        <footer>
            <p className='text-center m-5'><small>copyright © {currentYear}</small></p>
        </footer>
    );
};

export default Footer;