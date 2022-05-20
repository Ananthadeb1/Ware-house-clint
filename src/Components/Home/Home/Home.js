import React from 'react';
import { Link } from 'react-router-dom';
// import useSPices from '../../../hooks/useSpices';
import usePerfumes from '../../../hooks/usePerfumes';
// import Spice from '../../Shared/Spice/Spice';
import Perfume from '../../Shared/Perfume/Perfume';
import Spinner1 from '../../Shared/Spinner/Spinner';
import Banner from '../Banner/Banner';
import './home.css'
import icon from './vector.png';
import respectFood from './usePerfume.png'
import health from './Healthy-Diet.jpg'



const Home = () => {
    const [perfumes, setPerfumes] = usePerfumes();

    return (
        <div className='home'>
            <div className='d-flex justify-content-center align-items-center'>
                <h2 className='my-2 p-3 ' >Perfume House  </h2>
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
                    perfumes.length <= 0 ? <Spinner1 ClassName='mx-auto' ></Spinner1> : perfumes.slice(0,6).map(perfume => <Perfume key={perfume.id} perfume={perfume}></Perfume>)
                    //  spices.length <= 0 ? <Spinner1 className='mx-auto' ></Spinner1> : spices.slice(0, 6).map(spice => <Spice key={spice.id} spice={spice}></Spice>)
                }

            </div>
            <Link to='/inventory'><button className='btn w-50 mt-5 mb-2 manage-stock-button'>Manage Stocks</button></Link>
            <div className='row mx-3 px-3 my-5 py-5'>

                <div className='col-lg-6 col-sm-12 my-auto'>
                    <h3>Healthy Diet</h3>
                    <p>Have you ever planned to eat healthily, but don’t know exactly how to manage that? You watch all those youtube videos and still don’t get what the catch of maintaining a healthy lifestyle is?
                        If the answer is yes to the questions above, then continue reading.
                        <br />

                        Adding nutrient-rich foods to an already balanced diet can bring health benefits, but it also involves avoiding too many foods and making sure you get enough of others. You have to eat a wide range of foods to ensure you get the nutrients your body needs and get.
                        checkout the link get more info...

                        .</p>

                </div>
                <div className='col-lg-6 col-sm-12 article-image'>
                    <img className=' img-fluid' src={health} alt="" />
                </div>
            </div>
            <a><button className='btn w-50  mb-2 manage-stock-button'>Go to website</button></a>
        </div>
    );
};

export default Home;