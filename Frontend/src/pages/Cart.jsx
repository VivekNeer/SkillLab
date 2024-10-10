/* eslint-disable react/prop-types */
import { useState } from "react";
import Topbar from "../components/Topbar";
import MarqueeSection from "../components/MarqueeSection";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

// eslint-disable-next-line react/prop-types
const Cart = ({ cartItems, setCartItems }) => {
  const handleRemove = (productName) => {
    setCartItems(cartItems.filter(item => item.productName !== productName));
  };

  const handleIncrement = (productName) => {
    setCartItems(cartItems.map(item =>
      item.productName === productName
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const handleDecrement = (productName) => {
    setCartItems(cartItems.map(item =>
      item.productName === productName && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div className="mt-10">
      <Topbar />
      <MarqueeSection />
      <div className="flex flex-col lg:flex-row justify-between mx-4 m-2 gap-2">
        <div className="w-full lg:flex-1">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              imgSrc={item.imgSrc}
              altText={item.productName}
              productName={item.productName}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemove(item.productName)}
              onIncrement={() => handleIncrement(item.productName)}
              onDecrement={() => handleDecrement(item.productName)}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <OrderSummary  cartItems={cartItems}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
