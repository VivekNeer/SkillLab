"use client";
import banner from '../assets/banner.jpg';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";


const Menu = () => {
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
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/air-floating-big-burger-with-meat-patty-cheese-tomatoes-lettuce_1305425-124.jpg?w=740"
          imgAlt="Utterly Obnoxius And Unappetizing Burger"
          productName="Utterly Obnoxius And Unappetizing Burger"
          price={199}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-melted-burger-juicy-flavorpacked-delight_1302525-14998.jpg?size=626&ext=jpg&ga=GA1.1.550004339.1728573468&semt=ais_hybrid-rr-similar"
          imgAlt="Pasta"
          productName="Suprisingly Normal And Slightly Appetizing Burger"
          price={299}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-burger-isolated-dark-background-fresh-hamburger-fastfood-with-beef-cheese_1280668-704.jpg?w=740"
          imgAlt="Milkshake"
          productName="At This Price point If This Burger Aint Good IDK What Is"
          price={399}
        />
        <ProductCard 
          imgSrc="https://img.freepik.com/premium-photo/tasty-burger-isolated-dark-background-fresh-hamburger-fastfood-with-beef-cheese_1280668-704.jpg?w=740"
          imgAlt="Milkshake"
          productName="Better be Gold Inside All That Burger - Aravind"
          price={499}
        />
      </div>
      </div>
  );
}

// eslint-disable-next-line react/prop-types
const ProductCard = ({ imgSrc, imgAlt, productName, price }) => {
  return (
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
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
};



export default Menu;