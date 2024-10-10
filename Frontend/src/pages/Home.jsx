// import React from 'react';
import Pizza from '../assets/pizza.jpg';
// import Burger from '../assets/burger.jpg';
import { Card, Blockquote } from "flowbite-react";
// import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>
      <div className="relative h-screen flex flex-col justify-center items-center text-white text-center z-0">
        <img src={Pizza} alt="Delicious Pizza" className="w-full h-full object-cover absolute inset-0 z-0" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-10">
          <h1 className="text-5xl font-bold mb-4"><span className='font-honk text-7xl'>Welcome</span><span className='font-honk text-7xl'> to </span><span className='font-honk text-7xl'>Food Paradise</span> </h1>
        </div>
      </div>

      <div className="mx-auto mt-10 mb-0 max-w-screen-md text-center font-exo font-bold text-2xl">
        <p>Reviews from our 'esteemed' customers</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-auto m-16">
        {/* Customer Reviews */}
        <Review
          name="Kushal"
          title="Kidnapped"
          quote="The quality of the food from this factory is unparalleled! Every meal feels like it’s made with love and care."
        />
        <Review
          name="Aravind P Sagar"
          title="Jobless Hostelite"
          quote="I’ve never been this impressed with a food supplier. Their attention to detail and commitment to quality has made our dining experience exceptional!"
        />
        <Review
          name="Manas"
          title="Missing"
          quote="Our team loves the meals provided by Food Factory. They’re consistently delicious, fresh, and satisfying!"
        />
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 my-10">
        {/* Top Row (3 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>

        {/* Bottom Row (2 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
};

const Review = ({ name, title, quote }) => {
  return (
    <figure className="mx-auto max-w-screen-md text-center">
      <svg
        className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Blockquote>
        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">{quote}</p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">{name}</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{title}</cite>
        </div>
      </figcaption>
    </figure>
  );
};

const CardComponent = () => {
  const randomImage = `https://picsum.photos/250/25${Math.floor(Math.random() * 10)}`;

  return (
    <Card
      className="max-w-sm transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-2xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={randomImage}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis, impedit tenetur quidem culpa consequatur velit, iusto aliquid eaque, placeat voluptates eius? Omnis non eaque quidem numquam cum. Neque, architecto?
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut numquam, quaerat error at nostrum. Dolorem totam possimus, minus ducimus expedita fugit ipsam corrupti neque id doloribus laudantium cumque amet.
      </p>
    </Card>
  );
};

export default Home;
