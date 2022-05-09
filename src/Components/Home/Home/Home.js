import React from 'react';
import { Link } from 'react-router-dom';
import useSPices from '../../../hooks/useSpices';
import Spice from '../../Shared/Spice/Spice';
import Spinner1 from '../../Shared/Spinner/Spinner';
import Banner from '../Banner/Banner';
import './home.css'
import icon from './vector.png';
import respectFood from './foodWaste.jpg'



const Home = () => {
    const [spices, setSpices] = useSPices()

    return (
        <div className='home'>
            <div className='d-flex justify-content-center align-items-center'>
                <h2 className='my-2 p-3 ' >Spice Heaven  </h2>
                <img style={{ width: "150px" }} src={icon} alt="" />
            </div>
            <div className='carousel-container mx-5 '>
                <Banner></Banner>
            </div>
            <div className='row mx-3 px-3 my-5 py-5'>
                <div className='col-lg-6 col-sm-12 article-image'>
                    <img className=' img-fluid' src={respectFood} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 my-auto'>
                    <h3>Food Waste</h3>
                    <p>Cooking is an art but it becomes evil when we misuse food while cooking. Many People around the world are not even able to eat once a day. Reducing food waste is environmentally important as it keeps food out of landfills. It makes economic sense at the small scale, by lowering household food bills and at the large scale by reducing disposal costs for restaurants, processors and farmers.</p>
                </div>
            </div>
            <h2 className='mt-5'>Our Products</h2>
            <div className='spice-Container mt-3'>
                {
                    spices.length < 0 ? <Spinner1></Spinner1> : spices.slice(0, 6).map(spice => <Spice key={spice.id} spice={spice}></Spice>)
                }

            </div>
            <Link to='/inventory'><button className='btn'>Manage Stocks</button></Link>

        </div>
    );
};

export default Home;