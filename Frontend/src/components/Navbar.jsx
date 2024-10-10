import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-transparent absolute top-0 left-0 w-full z-10">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white font-sixtyfour">Food Paradise</span>
        </Navbar.Brand>
        <Navbar.Toggle />

        {/* <Navbar.Collapse>
        <form className="hidden md:flex justify-center items-center w-full">
  <label htmlFor="default-search" className="sr-only font-protest">Search</label>
  <div
    className="relative rounded-lg overflow-hidden"
    style={{
      background: 'radial-gradient(#fff2 30%, #fff4)',
      borderRadius: '20px',
      boxShadow: '5px 5px 10px #0007, -1px -1px 2px #fff, 1px 1px 2px #555',
      backdropFilter: 'blur(5px)',
      transform: 'translateY(25px)',
      transition: 'transform .25s',
    }}
  >
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-72 p-2 pl-10 text-sm text-yellow-50 border border-gray-300 bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-exo"
      placeholder="Search..."
      required
    />
  </div>
</form>

        </Navbar.Collapse> */}
        
          <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/" className="text-blue-600 font-protest text-xl">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/gallery" className="text-blue-600 font-protest text-xl">Gallery</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/menu" className="text-blue-600 font-protest text-xl">Menu</Link>
          </Navbar.Link>
          {/* <Navbar.Link>
            <Link to="/products" className="text-blue-600 font-protest text-xl">Products</Link>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
        
    </>
  );
};

export default CustomNavbar;
