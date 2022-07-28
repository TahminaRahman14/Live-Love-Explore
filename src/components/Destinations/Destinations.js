    import React, { useEffect, useState } from 'react';
    import Place from '../Place/Place';
    import Cart from '../Cart/Cart';

    import './Destinations.css'

    const Destinations = () => {

        const [destinations,setDestinations] = useState([]);
        const [cart, setCart] = useState([]);

        useEffect(() =>{
            fetch(`data.json`)
            .then(res => res.json())
            .then(data => setDestinations(data))
        },[]);

        const handleAddToCart = destination => {

            const newCart = [...cart,destination];
            setCart(newCart);
        }

        const RemoveCart = () => {
        setCart([]);
        }

        return (
            <div className='destinations'>
        <div className="place-section">
            {
            
            destinations.map(destination =><Place
            key={destination.id}
                destination={destination}
                handleAddToCart={handleAddToCart}
                ></Place>)
            }

        </div>
        <div className="cart-section">
            
            <Cart 
            cart={cart}
            RemoveCart = {RemoveCart}
            ></Cart>

            </div>    

            </div>
        );
    };

    export default Destinations;