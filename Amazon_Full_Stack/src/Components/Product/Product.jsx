import React, { useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import "./Product.css";
import Home from "../Home/Home";
import StarIcon from "@mui/icons-material/Star";
export default function Product({ id, title, price, rating, image }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
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
  return (
    <div className="product ">
      <div className="product__info">
        <p>{truncate(title, 100)}</p>
        <p className="product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <small className="star">
                <StarIcon />
              </small>
            ))}
        </div>
      </div>
      <div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}
