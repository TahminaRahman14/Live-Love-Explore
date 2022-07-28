import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
const CartItem = ({selectedPlace,removeItem}) => {

    const {name,image,id} = selectedPlace;
 
    return (
        <div className='cart-item'>
            
            <img src={image} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon onClick={()=>removeItem(id)} icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default CartItem;