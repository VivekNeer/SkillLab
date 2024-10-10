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
        <Link to="/"><Navbar.Link className='text-lg'>Home</Navbar.Link></Link>
        <Link to="/menu"><Navbar.Link href="#" className='text-lg'>Burgers</Navbar.Link></Link>
        <Link to="/menu"><Navbar.Link href="#" className='text-lg'>Pizzas</Navbar.Link></Link>
        <Link to="/menu"><Navbar.Link href="#" className='text-lg'>Fries</Navbar.Link></Link>
        <Link to="/menu"><Navbar.Link href="#" className='text-lg'>Cold Drinks</Navbar.Link></Link>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  };
  
  export default Topbar;