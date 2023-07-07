import React, { useState } from 'react'
import { useStateValue } from '../Context/StateProvider';
import './Product.css'
import Home from '../Home/Home'
export default function Product({id,title,price,rating,image}) {
  const[{basket},dispatch]=useStateValue();
  const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
		
	};
  return (
    <div className='product'>
     <div className='product-info'>
       <p>{title}</p>
       <p className='product_price'>
        <small>$</small>
        <strong>{price}</strong>
       </p>
       <div className="product_rating">
        {Array(rating)
        .fill()
        .map(()=>(
          <p>⭐</p>
        ))}
        
       </div>
     </div>
     <img src={image} alt=''/>
     <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
