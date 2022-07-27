import React from 'react';
import './Place.css'

const Place = ({destination}) => {
    console.log(destination);

    const {name,image,price} = destination;
    return (
        <div className='product'>
                <img src= {image} alt="" />

                <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Travel Cost: ${price}</h4>

                </div>
                
            {/* <button onClick= {() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
            
            
            </div>
    );
};

export default Place;