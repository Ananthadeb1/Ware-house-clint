import React, { useEffect, useState } from 'react';
import useSpices from '../../../hooks/useSpices'
import Spice from '../../Shared/Spice/Spice';
import Spinner1 from '../../Shared/Spinner/Spinner';
import './Inventory.css'

const Inventory = () => {
    const [spices, setSpices] = useSpices()
    const onSubmit = event => {
        const name = event.target.Name.value;
        const description = event.target.Description.value;
        const quantity = event.target.Quantity.value;
        const price = event.target.Price.value;
        const manufacturer = event.target.Manufacturer.value;
        const img = event.target.PhotoURL.value;
        const data = { name, description, quantity, price, manufacturer, img }
        console.log(data);

        const url = 'http://localhost:5000/service'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => console.log(result))

    };
    return (
        <div>
            <h2>Inventory</h2>
            <div className='spice-Container'>
                {
                    spices.length < 0 ? <Spinner1></Spinner1> : spices.slice().map(spice => <Spice key={spice._id} spice={spice}></Spice>)
                }

            </div>
            <div>
                <form className='d-flex align-items-center justify-content-center flex-column py-3 add-form'>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Name" >Add Item :</label>
                        <input className='formInput' type="text" name='Name' placeholder='Name' required />
                    </div>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Description" >Add description:</label>
                        <textarea className='formInput' type="text" name='Description' placeholder='Description' required />
                    </div>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Quantity" >Add Quantity :</label>
                        <input className='formInput' type="text" name='Quantity' placeholder='Quantity' required />
                    </div>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Price" >Add Price:</label>
                        <input className='formInput' type="text" name='Price' placeholder='price' required />
                    </div>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Manufacturer" >Add Manuacturer name:</label>
                        <input className='formInput' type="text" name='Manufacturer' placeholder='Manufacturer' required />
                    </div>
                    <div className='d-flex justify-content-between w-50 mb-2 '>
                        <label className='formLabel me-2' htmlFor="PhotoURL" >Add Photo URL:</label>
                        <input className='formInput' type="text" name='PhotoURL' placeholder='PhotoURL' required />
                    </div>
                    <input className='formBtn' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default Inventory;