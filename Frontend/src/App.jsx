import CustomNavbar from "./components/Navbar";
import CustomFooter from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
// import Products from './pages/Products';
import { Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productName === newItem.productName
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.productName === newItem.productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the new item
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <div className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </div>
      <CustomFooter />
    </div> 
  );
}

export default App;
