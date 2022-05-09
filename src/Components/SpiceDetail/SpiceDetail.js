import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './SpiceDetail.css'

const SpiceDetail = () => {
    const { id } = useParams()
    const [spice, setSpice] = useState({})

    const url = `http://localhost:5000/spice/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSpice(data))
    }, [])
    const handleQuantity = () => {
        if (spice.quantity > 0) {
            const newQuantity = spice.quantity - 1;
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


            console.log(spice)
        }
        else {
            toast('All Item is Delivered')
        }
    }
    const addQuantity = (event) => {
        event.preventDefault();
        const newQuantity = parseInt(event.target.quantity.value) + parseInt(spice.quantity);

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

    return (
        <div className='w-75 mt-5 mx-auto'>
            <div className="card mb-3 p-1 text-start" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={spice.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{spice.name}</h3>
                            <p className="card-text">{spice.description}</p>
                            <p className="card-text"><strong>Quantity :</strong>{spice.quantity}</p>
                            <p className="card-text"><strong>Price :</strong>{spice.price}$ per 5 kg</p>
                            <p className="card-text"><strong>Manufacturer :</strong>{spice.manufacturer}</p>
                            <button onClick={handleQuantity} className='btn w-25'>Delivered</button>
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