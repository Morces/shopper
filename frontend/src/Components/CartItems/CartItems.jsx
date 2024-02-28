import React, { useContext } from "react";
import "./cartitems.css";
import ShopContext from "../../Context/ShopContext";

const CartItems = () => {
  const { allProducts, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cartitems-format">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
