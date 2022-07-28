import React, { useState } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
const Cart = ({cart,RemoveCart}) => {
   
  // failed attempt setting remove item

//    const[Cart,setCart]=useState([]);

//    const removeItem = (id) =>{
//     const newCart = Cart.filter(p => p.id !== id);
//     setCart(newCart);
// }

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
            cart={cart}
            selectedPlace={selectedPlace}
            key={selectedPlace.id}
            
            ></CartItem>
            )
           }
        
          <button id='btn-random' onClick={random}>
            <p>CHOOSE 1 FOR ME</p>
            </button>  
            <br />
            <br />
            <button id='btn-reset' onClick={RemoveCart}>
                <p>CHOOSE AGAIN</p>
            </button>
        
        </div>
    );
};

export default Cart;