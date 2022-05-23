import React, { useEffect, useState } from 'react';
import usePerfumes from '../../../hooks/usePerfumes';
import Perfume from '../../Shared/Perfume/Perfume';
import {useAuthState} from 'react-firebase-hooks/auth';
import Spinner1 from '../../Shared/Spinner/Spinner';
import './Inventory.css';

const Inventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.Name.value;
        const description = event.target.Description.value;
        const quantity = event.target.Quantity.value;
        const price = event.target.Price.value;
        const manufacturer = event.target.Manufacturer.value;
        const img = event.target.PhotoURL.value;
        const data = { name, description, quantity, price, manufacturer, img }
        console.log(data);

        const url = 'https://enigmatic-tundra-20476.herokuapp.com/perfumes'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    };



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure??');
        if (proceed) {
            const url = `https://enigmatic-tundra-20476.herokuapp.com/perfume/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = perfumes.filter(perfume => perfume._id !== id)
                    setPerfumes(remaining);
                })


        }

    }
    return (
        <div>
            <h2>Inventory</h2>
            <div className='spice-Container'>
                {
                    perfumes?.length <= 0 ? <Spinner1 className='mx-auto'></Spinner1> : perfumes?.slice().map(perfume => <Perfume key={perfume._id} Delete={handleDelete} perfume={perfume}></Perfume>)
                }

            </div>
            <div>
                <form onSubmit={handleSubmit} className='font-colr d-flex align-items-center justify-content-center flex-column py-3 add-form'>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel  me-2' htmlFor="Name" >Add Item :</label>
                        <input className='formInput' type="text" name='Name' placeholder='Name' required />
                    </div>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Description" >Add description:</label>
                        <textarea className='formInput' type="text" name='Description' placeholder='Description' required />
                    </div>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Quantity" >Add Quantity :</label>
                        <input className='formInput' type="text" name='Quantity' placeholder='Quantity' required />
                    </div>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Price" >Add Price:</label>
                        <input className='formInput' type="text" name='Price' placeholder='price' required />
                    </div>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel me-2' htmlFor="Manufacturer" >Add Manuacturer name:</label>
                        <input className='formInput' type="text" name='Manufacturer' placeholder='Manufacturer' required />
                    </div>
                    <div className='d-flex justify-content-between w-lg-50 w-sm-75 mb-2 '>
                        <label className='formLabel me-2' htmlFor="PhotoURL" >Add Photo URL:</label>
                        <input className='formInput' type="text" name='PhotoURL' placeholder='PhotoURL' required />
                    </div>
                    <input className='formBtn font-colr' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default Inventory;