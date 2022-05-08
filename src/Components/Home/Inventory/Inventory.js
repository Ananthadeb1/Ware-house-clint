import React, { useEffect, useState } from 'react';
import useSpices from '../../../hooks/useSpices'
import Spice from '../../Shared/Spice/Spice';
import Spinner1 from '../../Shared/Spinner/Spinner';
import './Inventory.css'

const Inventory = () => {
    const [spices, setSpices] = useSpices()
    return (
        <div>
            <h2>Inventory</h2>
            <div className='spice-Container'>
                {
                    spices.length < 0 ? <Spinner1></Spinner1> : spices.slice().map(spice => <Spice spice={spice}></Spice>)
                }
            </div>

        </div>
    );
};

export default Inventory;