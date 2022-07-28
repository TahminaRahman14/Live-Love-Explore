import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
const Cart = ({cart,RemoveCart}) => {
   // console.log(cart);
    const {name,image} = cart;

 

  
    return (
        <div className='cart'>
            <h3>Selected Destinations:{cart.length}</h3>
           {
            cart.map((names)=>
            <p>{names.image}{names.name}</p>
            )
           }
        
        </div>
    );
};

export default Cart;