import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
const Cart = ({cart,RemoveCart}) => {
   // console.log(cart);
   // const {name,image} = cart;

  const random = () =>{ const r = 
    Math.floor(Math.random() * cart.length)
    // eslint-disable-next-line no-restricted-globals, no-useless-concat
    confirm("Randomly chosen destination:" +" "+cart[r].name);
    RemoveCart();
  };
    return (
        <div className='cart'>
            <h2>Selected Destinations</h2>
           {
            cart.map((selectedPlace)=>
            <CartItem 
            selectedPlace={selectedPlace}
            key={selectedPlace.id}
            ></CartItem>
            )
           }
        
          <button id='btn-random' onClick={random}>
            <p>Choose 1 For Me</p>
            </button>  
            <br />
            <br />
            <button id='btn-reset' onClick={RemoveCart}>
                <p>Choose Again</p>
            </button>
        
        </div>
    );
};

export default Cart;