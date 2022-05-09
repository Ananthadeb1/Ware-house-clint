import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './spice.css'

const Spice = ({ spice }) => {
    const { _id, name, description, manufacturer, price, quantity, img } = spice;
    const link = window.location.href.includes('inventory')
    let shortDescription;
    if (description.length > 103) {
        shortDescription = <span>{description.slice(' ', 102)}...<Link to={`/spice/${_id}`}> See more</Link></span>
    }
    else {
        shortDescription = description
    }


    return (
        <div className='text-start '>
            <div className="card p-1 card-container" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {
                        link ? <p className="card-text">{shortDescription}</p> : <></>
                    }
                    <p className="card-text"><strong>Quantity</strong> : {quantity} </p>
                    <p className="card-text"><strong>Price</strong> : {price} $</p>
                    <p className="card-text"><strong>Manufacturer</strong> : {manufacturer}</p>
                    {
                        link ? <div>
                            <Link to={`/spice/${_id}`}><button className='btn rounded'>Update Stock</button>  </Link>
                            <button className='btn rounded'>Delete</button>

                        </div> : <Link to={`/spice/${_id}`}><button className='btn rounded'>Manage Stock</button>  </Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Spice;