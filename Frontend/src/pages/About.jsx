import banner from '../assets/banner.jpg';

const About = () => {
  return (
    <div>
      <div className="relative h-screen flex flex-col justify-center items-center text-white text-center z-0">
        <img src={banner} alt="Delicious Pizza" className="w-full h-full object-cover absolute inset-0 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-10">
          <h1 className="text-5xl mb-4  font-exo max-w-5xl mx-auto mt-14">
            <span className='font-protest text-red-600'>Food Paradise</span> is your ultimate destination for<span className='font-protest text-red-400'> mouth-watering</span> dishes and <span className='font-protest text-slate-400'>unforgettable flavors.</span>Welcome to a place where every bite takes you closer to food <span className='font-protest text-red-700'>heaven!</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
