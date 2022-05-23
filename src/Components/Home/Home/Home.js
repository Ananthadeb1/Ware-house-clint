import React from 'react';
import { Link } from 'react-router-dom';
// import useSPices from '../../../hooks/useSpices';
import usePerfumes from '../../../hooks/usePerfumes';
// import Spice from '../../Shared/Spice/Spice';
import Perfume from '../../Shared/Perfume/Perfume';
import Spinner1 from '../../Shared/Spinner/Spinner';
import Banner from '../Banner/Banner';
import './home.css';
import icon from './vector.png';
import usePerfume from './usePerfume.png';
import choosePerfume from './choose-perfume.png';



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
                    <img className=' img-fluid' src={usePerfume} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 my-auto'>
                    <h3>How to use pefume</h3>
                    <p>Applying your perfume is probably the final (and fastest) step in your beauty routine—a spritz here, a dab there, and you’re out the door. You may not even think about how to apply perfume because well, it seems so simple. But there’s more than meets the eye when it comes to wearing fragrances. Where you spray perfume on your body, how much you spritz on.</p>
                </div>
            </div>
            <h2 className='mt-5'>Our Products</h2>
            <div className='spice-Container font-colr mt-3'>
                {
                    perfumes.length <= 0 ? <Spinner1 ClassName='mx-auto' ></Spinner1> : perfumes.slice(0,6).map(perfume => <Perfume key={perfume._id} perfume={perfume}></Perfume>)
                }

            </div>
            <Link to='/inventory'><button className='btn w-50 mt-5 mb-2 manage-stock-button font-colr'>Manage Stocks</button></Link>
            <div className='row mx-3 px-3 my-5 py-5'>

                <div className='col-lg-6 col-sm-12 my-auto'>
                    <h3>Choose a Batter Perfume</h3>
                    <p>Choosing a preferred type of perfume for women to complement the age relates to knowing the texture of your skin and body chemistry. This can have a viable impact on the strength of the smell and its ability to last. Usually, perfumes are targeted to a specific age group. Although it is possible to wear any type of fragrance, there are those scents that are most age-appropriate. A teenager may fall for Juicy Couture-Vivala Juicy but this scent may not appear to be attractive to a 35 years old lady. Similarly, the typical teenager wouldn’t buy Joy by Jean Patou, the vintage fragrance....</p>

                </div>
                <div className='col-lg-6 col-sm-12 article-image'>
                    <img className=' img-fluid' src={choosePerfume} alt="" />
                </div>
            </div>
            <a><button className='btn w-50  mb-2 manage-stock-button font-colr'>Go to website</button></a>
        </div>
    );
};

export default Home;