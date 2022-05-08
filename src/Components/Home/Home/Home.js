import React from 'react';
import useSPices from '../../../hooks/useSpices';
import Spice from '../../Shared/Spice/Spice';
import Banner from '../Banner/Banner';
import './home.css'
import icon from './vector.png'



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
            <h2 className='mt-5'>Our Products</h2>
            <div className='spice-Container mt-3'>
                {
                    spices.slice(0, 6).map(spice => <Spice key={spice.id} spice={spice}></Spice>)
                }
            </div>

        </div>
    );
};

export default Home;