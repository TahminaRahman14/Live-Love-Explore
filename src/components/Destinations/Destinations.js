import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Destinations.css'

const Destinations = () => {

    const [destinations,setDestinations] = useState([]);

    useEffect(() =>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setDestinations(data))
    },[]);

    return (
        <div className='destinations'>
       <div className="place-section">
        {
         
         destinations.map(destination =><Place
         key={destination.id}
            destination={destination}
            ></Place>)
        }

       </div>
       <div className="cart-section">
        
        </div>    
        </div>
    );
};

export default Destinations;