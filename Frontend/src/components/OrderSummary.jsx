/* eslint-disable react/prop-types */
const OrderSummary = ({ cartItems }) => {
  const originalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const savings = 199; // Example fixed savings
  const storePickup = 99; // Example store pickup fee
  const tax = 50; // Example tax amount
  const total = originalPrice - savings + storePickup + tax;

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        Order summary
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${originalPrice.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Savings
            </dt>
            <dd className="text-base font-medium text-green-600">
              -${savings.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Store Pickup
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${storePickup.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Tax
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${tax.toFixed(2)}
            </dd>
          </dl>
        </div>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 dark:text-white">
            ${total.toFixed(2)}
          </dd>
        </dl>
      </div>
      <a
        href="#"
        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none dark:bg-primary-600"
      >
        Proceed to Checkout
      </a>
    </div>
  );
};

export default OrderSummary;
