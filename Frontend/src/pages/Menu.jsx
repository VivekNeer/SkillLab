"use client";
import { useState } from "react";
import banner from '../assets/banner.jpg';
import { Card , Alert } from "flowbite-react";
import Topbar from "../components/Topbar";

const Menu = () => {
  const [showNotification, setShowNotification] = useState(false); // State to manage notification globally

  const handleShowNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after 3 seconds
    }, 3000);
  };

  return (
    <div>
      <div className="relative h-screen flex flex-col justify-center items-center text-white text-center z-0">
        <img src={banner} alt="Delicious Pizza" className="w-full h-full object-cover absolute inset-0 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-10">
          <h1 className="text-5xl mb-4 font-exo max-w-5xl mx-auto mt-14">
            <span className='font-protest text-red-600'>Food Paradise</span> is your ultimate destination for
            <span className='font-protest text-red-400'> mouth-watering</span> dishes and
            <span className='font-protest text-slate-400'> unforgettable flavors.</span> 
            Welcome to a place where every bite takes you closer to food <span className='font-protest text-red-700'>heaven!</span>
          </h1>
        </div>
      </div>
      <Topbar />
      <div className='flex flex-auto flex-row gap-8 m-7 flex-wrap'>
        <ProductCard 
          imgSrc="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg"
          imgAlt="Chicken Burger"
          productName="Insanely Mid And Extra Sumptilous Burger"
          price={99}
          onAddToCart={handleShowNotification} // Pass the callback
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/air-floating-big-burger-with-meat-patty-cheese-tomatoes-lettuce_1305425-124.jpg?w=740"
          imgAlt="Utterly Obnoxius And Unappetizing Burger"
          productName="Utterly Obnoxius And Unappetizing Burger"
          price={199}
          onAddToCart={handleShowNotification}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-melted-burger-juicy-flavorpacked-delight_1302525-14998.jpg?size=626&ext=jpg&ga=GA1.1.550004339.1728573468&semt=ais_hybrid-rr-similar"
          imgAlt="Pasta"
          productName="Suprisingly Normal And Slightly Appetizing Burger"
          price={299}
          onAddToCart={handleShowNotification}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-burger-isolated-dark-background-fresh-hamburger-fastfood-with-beef-cheese_1280668-704.jpg?w=740"
          imgAlt="Milkshake"
          productName="At This Price point If This Burger Aint Good IDK What Is"
          price={399}
          onAddToCart={handleShowNotification}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-burger-isolated-dark-background-fresh-hamburger-fastfood-with-beef-cheese_1280668-704.jpg?w=740"
          imgAlt="Milkshake"
          productName="Better be Gold Inside All That Burger - Aravind"
          price={499}
          onAddToCart={handleShowNotification}
        />
      </div>
      
      {/* Global Notification */}
      {showNotification && <Notification />}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const ProductCard = ({ imgSrc, imgAlt, productName, price, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(); // Call the passed function to show the notification
  };

  return (
    <div>
      <Card className="max-w-sm rounded-xl">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="max-w-sm max-h-72 object-cover rounded-xl"
        />
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productName}
        </h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            onClick={handleAddToCart} // Attach click handler to show the notification
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add To Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

// Notification Component
const Notification = () => {
  return (
    <Alert color="info" className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm mb-5 bg-slate-900">
      <span className="font-medium m-8">Item has been added to cart!</span>
    </Alert>
  );
};
5
export default Menu;
