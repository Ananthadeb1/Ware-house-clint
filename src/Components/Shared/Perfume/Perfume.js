import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './perfume.css'

const Perfume = ({ perfume, Delete }) => {
    const { _id, name, description, manufacturer, price, quantity, img } = perfume;
    const link = window.location.href.includes('inventory')
    let shortDescription;
    if (description?.length > 103) {
        shortDescription = <span>{description.slice(' ', 102)}...<Link to={`/perfume/${_id}`}> See more</Link></span>
    }
    else {
        shortDescription = description;
    }


    return (
        <div className='text-start '>
            <div className="card p-1 card-container" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title card-text">{name}</h5>
                    {
                        link ? <p className="card-text">{shortDescription}</p> : <></>
                    }
                    <p className="card-text"><strong>Quantity</strong> : {quantity} </p>
                    <p className="card-text"><strong>Price</strong> : {price} $</p>
                    <p className="card-text"><strong>Manufacturer</strong> : {manufacturer}</p>
                    {
                        link ? <div>
                            <Link to={`/perfume/${_id}`}><button className='btn rounded card-text'>Update Stock</button>  </Link>
                            <button onClick={() => Delete(_id)} className='btn rounded card-text'>Delete</button>

                        </div> : <Link to={`/perfume/${_id}`}><button className='btn rounded card-text'>Manage Stock</button>  </Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Perfume;