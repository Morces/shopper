import React, { useContext } from "react";
import "./cartitems.css";
import ShopContext from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

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
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img src={e.image} className="carticon-product-icon" alt="" />
                <p>{e.name}</p>$<p>{e.new_price}</p>
                <button className="cartitems-qty">{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={removeIcon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
