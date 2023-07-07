import React, { useState } from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "../Context/StateProvider";
import StarIcon from "@mui/icons-material/Star";


function CheckOutProduct({ id, title, price, rating, image, quantity }) {
	const [{ basket }, dispatch] = useStateValue();

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


	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="product-img" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<small>
								<StarIcon/>
							</small>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckOutProduct;