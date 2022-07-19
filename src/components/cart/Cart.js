import React from "react";
import classes from "./cart.module.scss";
import CartItem from "./cart-item/CartItem";
import {
  getCartItems,
  getCartTotal,
  deleteItem,
  updateQuantity,
} from "./cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const { cartItems, cartTotal } = useSelector((state) => ({
    cartItems: getCartItems(state),
    cartTotal: getCartTotal(state),
  }));

  // const options = {
  //   clientSecret: "{{CLIENT_SECRET)}}",
  // };

  return (
    <div className={classes["cart"]}>
      <div className={classes["cart-items"]}>
        <div className={classes["header"]}>
          <h4>Shopping Cart</h4>
          <p>{cartItems.length} Items</p>
        </div>
        <hr />
        <div style={{ maxHeight: "600px", overflowY: "auto" }}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
      </div>
      <div className={classes["total-section"]}>
        <h2>Total</h2>
        <hr />
        <h5>Total: $ {cartTotal}</h5>
        <div className={classes["checkout"]}>CHECKOUT</div>
      </div>
    </div>
  );
}

export default Cart;
