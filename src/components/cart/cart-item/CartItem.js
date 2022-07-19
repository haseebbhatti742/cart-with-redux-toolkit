import React, { useEffect, useState } from "react";
import classes from "./cart-item.module.scss";
import { useDispatch } from "react-redux";

function CartItem({ item, deleteItem, updateQuantity }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["image"]}>
        <img src={item.image} alt={item.id} />
      </div>
      <div className={classes["details"]}>
        <h6>{item.category}</h6>
        <p>{item.title}</p>
      </div>
      <div className={classes["buttons"]}>
        <p
          onClick={() => {
            if (quantity > 1) {
              setQuantity(parseInt(quantity) - 1);
              dispatch(
                updateQuantity({ id: item.id, quantity: +quantity - 1 })
              );
            }
          }}
        >
          -
        </p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => {
            setQuantity(e.target.value);
            dispatch(updateQuantity({ id: item.id, quantity: +quantity }));
          }}
        />
        <p
          onClick={() => {
            setQuantity(parseInt(quantity) + 1);
            dispatch(updateQuantity({ id: item.id, quantity: +quantity + 1 }));
          }}
        >
          +
        </p>
      </div>
      <div className={classes["price"]}>${item.price * quantity}</div>
      <div
        className={classes["delete"]}
        onClick={() => dispatch(deleteItem(item.id))}
      >
        X
      </div>
    </div>
  );
}

export default CartItem;
