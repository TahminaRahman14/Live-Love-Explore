import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
const CartItem = ({selectedPlace}) => {
    return (
        <div className='cart-item'>
            
            <img src={selectedPlace.image} alt="" />
            <p>{selectedPlace.name}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default CartItem;