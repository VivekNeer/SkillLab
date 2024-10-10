import Topbar from "../components/Topbar";
import MarqueeSection from "../components/MarqueeSection";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  return (
    <div className="mt-10">
      <Topbar />
      <MarqueeSection />
      <div className="flex flex-col lg:flex-row justify-between mx-4 m-2 gap-2">
        {/* Cart items should take full width on small screens, and flex-1 on larger screens */}
        <div className="w-full lg:flex-1">
          <CartItem />
          {/* Add more CartItem components as needed */}
        </div>

        {/* Order summary should stack below the cart on small screens and align right on larger screens */}
        <div className="w-full lg:w-1/3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
