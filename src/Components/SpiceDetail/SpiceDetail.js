import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './SpiceDetail.css';

const SpiceDetail = () => {
    const { id } = useParams()
    const [perfume, setPerfume] = useState({})
    const [user] = useAuthState(auth)
    // const [user] = useAuthState()

    const url = `https://enigmatic-tundra-20476.herokuapp.com/perfume/${id}`
    

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [])
    const handleQuantity = () => {
        if (perfume.quantity > 0) {
            const newQuantity = perfume.quantity - 1;
            const Quantity = { newQuantity };

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Quantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    alert('users updated successfully!!!');
                })
                perfume.quantity = newQuantity;


            console.log(perfume)
        }
        else {
            toast('All Item is Delivered')
        }
    }
    const addQuantity = (event) => {
        event.preventDefault();
        const newQuantity = parseInt(event.target.quantity.value) + parseInt(perfume.quantity);

        const Quantity = { newQuantity }
        console.log(Quantity);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('users updated successfully!!!');
            })



    }
    const addToStock = () => {
        const stockData = {
            email: user.email,
            id: perfume._id,
            name: perfume.name,
            description: perfume.description,
            quantity: perfume.quantity,
            price: perfume.price,
            manufacturer: perfume.manufacturer,
            img: perfume.img,
        };
        const url = `https://enigmatic-tundra-20476.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(stockData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('added to stock')
            })

    }

    return (
        <div className='w-75 mt-5 mx-auto'>
            <div className="card mb-3 p-1 text-start" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={perfume.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{perfume.name}</h3>
                            <p className="card-text">{perfume.description}</p>
                            <p className="card-text"><strong>Quantity :</strong>{perfume.quantity}</p>
                            <p className="card-text"><strong>Price :</strong>{perfume.price}$ per 5 kg</p>
                            <p className="card-text"><strong>Manufacturer :</strong>{perfume.manufacturer}</p>
                            <button onClick={handleQuantity} className='btn w-25 me-3'>Delivered</button>
                            <button onClick={addToStock} className='btn w-25'>Add to My Items</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <form className='d-flex align-items-center justify-content-center py-3 add-form' onSubmit={addQuantity}>
                    <label className='formLabel me-2' htmlFor="quantity" >Add to Stock :</label>
                    <input className='formInput' type="text" name='quantity' placeholder='Quantity' />
                    <input className='formBtn' type="submit" value="Add" />
                </form>

            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default SpiceDetail;