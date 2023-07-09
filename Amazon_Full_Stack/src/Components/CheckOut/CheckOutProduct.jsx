import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "../Context/StateProvider";
import StarIcon from "@mui/icons-material/Star";

function CheckOutProduct({
  id,
  title,
  price,
  rating,
  hideButton,
  image,
  quantity,
}) {
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

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      id: id,
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product-img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{truncate(title, 100)}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <small key={index}>
                <StarIcon />
              </small>
            ))}
        </div>
        {!hideButton && <p>Qty = {quantity}</p>}
        <br />
        {!hideButton && (
          <button onClick={addToBasket}>
            <strong>+</strong>
          </button>
        )}
        {!hideButton && (
          <button onClick={decreaseQuantity}>
            <strong>-</strong>
          </button>
        )}
        {!hideButton && <button onClick={removeFromBasket}>Remove</button>}
        <br />
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default CheckOutProduct;
