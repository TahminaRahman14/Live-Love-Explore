    import React, { useEffect, useState } from 'react';
    import Place from '../Place/Place';
    import Cart from '../Cart/Cart';

    import './Destinations.css'

    const Destinations = () => {

        const [destinations,setDestinations] = useState([]);
        const [cart, setCart] = useState([]);

        // Load Data
        
        useEffect(() =>{
            fetch(`data.json`)
            .then(res => res.json())
            .then(data => setDestinations(data))
        },[]);

        // handle data to add in the cart section

        const handleAddToCart = destination => {

            if(!cart.includes(destination)){

                const newCart = [...cart,destination].slice(0,4);
                setCart(newCart);
            }
            
        }

        // Reset the cart using button

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