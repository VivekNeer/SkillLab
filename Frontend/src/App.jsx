import CustomNavbar from './components/Navbar';
import CustomFooter from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
// import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomNavbar />
      <div className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
