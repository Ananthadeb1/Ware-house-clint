import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpiceDetail = () => {
    const { id } = useParams()
    const [spice, setSpice] = useState({})

    const url = `http://localhost:5000/spice/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSpice(data))
    }, [])

    console.log(id);

    return (
        <div>
            <h1>this is spice no: {spice._id}</h1>

        </div>
    );
};

export default SpiceDetail;