import { Carousel, Card } from "flowbite-react";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getRandomImageUrl = (width, height) => `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;

  useEffect(() => {
    const generateImages = () => {
      const imageArray = [];
      for (let i = 0; i < 50; i++) {
        const randomHeight = Math.floor(Math.random() * 100) + 250; // Random height between 150 and 350
        const randomWidth = 250; // Fixed width for consistent columns
        imageArray.push({ url: getRandomImageUrl(randomWidth, randomHeight), height: randomHeight });
      }
      setImages(imageArray);
    };

    generateImages();
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        <Carousel slideInterval={5000}>
          <img src={getRandomImageUrl(1920, 1080)} alt="Random Image 1" className="object-cover w-full h-full" />
          <img src={getRandomImageUrl(1920, 1080)} alt="Random Image 2" className="object-cover w-full h-full" />
          <img src={getRandomImageUrl(1920, 1080)} alt="Random Image 3" className="object-cover w-full h-full" />
          <img src={getRandomImageUrl(1920, 1080)} alt="Random Image 4" className="object-cover w-full h-full" />
          <img src={getRandomImageUrl(1920, 1080)} alt="Random Image 5" className="object-cover w-full h-full" />
        </Carousel>
      </div>

      <div className='mx-auto mt-10 mb-0 max-w-screen-md text-center font-exo font-bold text-2xl'>
        <p>Carousel</p>
      </div>

      <div className="masonry-layout mx-auto mt-10" style={{ columns: "400px", columnGap: '1rem' }}>
        {images.map((image, index) => (
          <Card key={index} className="mb-4" imgAlt={`Random Image ${index + 1}`} imgSrc={image.url}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut numquam, quaerat error at nostrum.
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Gallery;
