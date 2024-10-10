import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";


const Topbar = () => {
    return (
      <>
         <Navbar fluid rounded >
        <div className="flex md:order-2">
             <Link to="/cart" ><Button >Shopping Cart</Button></Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link Link to="/" className='text-lg'>
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className='text-lg'>Burgers</Navbar.Link>
          <Navbar.Link href="#" className='text-lg'>Pizzas</Navbar.Link>
          <Navbar.Link href="#" className='text-lg'>Fries</Navbar.Link>
          <Navbar.Link href="#" className='text-lg'>Cold Drinks</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  };
  
  export default Topbar;