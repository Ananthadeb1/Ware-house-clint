import React from 'react';
import playLogo from './playstore.png';
import appleLogo from './applestore.png';
import phone from './phone.png'
import mail from './mail.png'
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    // console.log(currentYear);
    return (
        <footer>
            <div className='footer-content-container'>
                <div className='my-auto'>
                    <p className='footerName'>Perfume House</p>
                    <p>A place for people who like to  feel fress and confidant.
                    </p>
                </div>
                <div className='my-auto footer-link-container'>
                    <p className='footer-content-heading'>Pages</p>
                    <hr className='w-75 mx-auto hori-line' />
                    <Link to="/home"><p >Home</p></Link>
                    <hr className='w-50 mx-auto hori-line' />
                    <Link to="/inventory"><p >Inventory</p></Link>
                    <hr className='w-50 mx-auto hori-line' />
                    <Link to="/about"><p >About</p></Link>
                    <hr className='w-50 mx-auto hori-line' />
                    <Link to="/blogs"><p >Blogs</p></Link>
                </div>
                <div className='my-auto'>
                    <h1 className='footer-content-heading' >Contact us</h1>
                    <p><img src={phone} alt="" /> +8801630147991</p>
                    <p><img src={phone} alt="" /> +8801863286665</p>
                    <p><img src={mail} alt="" /> perfumehouse22@gmail.com</p>
                    <p><img src={mail} alt="" /> ananthadebnath103@gmail.com</p>
                </div>
                <div className='d-flex flex-column logo-container'>
                    <a href="https://play.google.com/store/apps"><img src={playLogo} alt="" /></a>
                    <a href="https://www.apple.com/store"><img src={appleLogo} alt="" /></a>
                </div>
            </div>
            <hr className='w-75 mx-auto' />
            <div className='text-center m-5'>
                <small>
                    <p >copyright © {currentYear}</p>
                    <p>This website is under maintenance of Anantha Debnath</p>
                    <p className='mx-5'>This is an experimental website for learning and knowledge aspects. There is no proffessional use of it. If noticed otherwise please contact at ananthadebnath103@gmail.com</p>
                </small>

            </div>

        </footer>
    );
};

export default Footer;