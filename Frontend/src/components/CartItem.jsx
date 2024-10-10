const CartItem = () => {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <a href="#" className="shrink-0 md:order-1">
            <img
              className="h-20 w-20 dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="imac image"
            />
            <img
              className="hidden h-20 w-20 dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt="imac image"
            />
          </a>
          <label htmlFor="counter-input" className="sr-only">
            Choose quantity:
          </label>
          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path stroke="currentColor" strokeWidth={2} d="M1 1h16" />
                </svg>
              </button>
              <input
                type="text"
                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white"
                defaultValue={2}
                required=""
              />
              <button
                type="button"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path stroke="currentColor" strokeWidth={2} d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                $1,499
              </p>
            </div>
          </div>
          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
              PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
              Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
            </a>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center text-sm font-medium text-red-600 dark:text-red-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  