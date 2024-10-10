import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <>
      <Marquee
        autoFill
        pauseOnHover
        direction="left"
        speed={10}
        gradient
        gradientColor="white"
        gradientWidth={400}
        className="font-zilla"
      >
        Get 15% off on all orders! Limited Time Offer! | Buy 1 Get 1 Free on
        Pizzas | Free Delivery on Orders Above $50 | Special Discounts on Cold
        Drinks | Combo Deals Available Now!
      </Marquee>

      <Marquee
        autoFill
        pauseOnHover
        direction="right"
        speed={10}
        gradient
        gradientColor="white"
        className="font-zilla"
      >
        Flash Sale! 20% Off Today Only | Exclusive Deals on Family Meals | Enjoy
        Free Desserts with Every Meal | Order Now and Save Big! | Weekend Offers
        Up to 25% Off!
      </Marquee>

      <Marquee
        autoFill
        pauseOnHover
        direction="left"
        speed={10}
        gradient
        gradientColor="white"
        className="font-zilla"
      >
        Sign Up for 10% Off on Your First Order! | Early Bird Discounts
        Available | Special Combo Offers for Friends and Family | Free Drinks
        with Every Pizza Order | Limited Time, Act Fast!
      </Marquee>
    </>
  );
};

export default MarqueeSection;
