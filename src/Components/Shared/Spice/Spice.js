import React from 'react';
import { Link } from 'react-router-dom';
import './spice.css'

const Spice = ({ spice }) => {
    const { name, description, manufacturer, price, quantity, img } = spice;

    return (
        <div className='text-start '>
            <div className="card p-1 card-container" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><strong>Quantity</strong> : {quantity} </p>
                    <p className="card-text"><strong>Price</strong> : {price} $</p>
                    <p className="card-text"><strong>Manufacturer</strong> : {manufacturer}</p>

                    <Link to='/'><button className='btn rounded'>Manage Stock</button>  </Link>
                </div>
            </div>

        </div>
    );
};

export default Spice;