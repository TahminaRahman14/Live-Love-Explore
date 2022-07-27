import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Place.css'

const Place = ({destination,handleAddToCart}) => {
    console.log(destination);

    const {name,image,price} = destination;
    return (
        <div className='place'>
                <img src= {image} alt="" />

                <div className='place-info'>
                <h3 className='place-name'>{name}</h3>
                <h4>Travel Cost: ${price}</h4>

                </div>
                
            <button onClick= {() => handleAddToCart(destination)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
            
            </div>
    );
};

export default Place;