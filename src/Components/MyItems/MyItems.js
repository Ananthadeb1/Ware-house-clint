import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);

            })
    }, [])


    const handleCancle = id => {
        const proceed = window.confirm('Are you sure??');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(spice => spice._id !== id)
                    setItems(remaining);
                })


        }

    }
    return (
        <div>
            <h2>My Items</h2>
            <div className=' d-flex flex-column align-items-center container-fluid justify-content-center row'>
                {
                    items.map(item => <div style={{ border: "2px solid darkbrown" }} className='d-flex align-items-center rounded col-lg-8 col-sm-12 text-center p-2 mt-2 ' key={item._id}>
                        <img style={{ borderRadius: "5px", width: "100px" }} src={item.img} alt="" />
                        <div className='container '>
                            <h4>{item.name}</h4>
                            <p>Quantity:{item.quantity}</p>
                        </div>
                        <button style={{ backgroundColor: "rgba(161, 66, 3, 0.76)" }} onClick={() => handleCancle(item._id)} className='btn w-25'>Cancel</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;