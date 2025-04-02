import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart - Nepali Bazar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className="bg-gray-50 font-sans">
        {/* Header remains unchanged */}

        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="p-6">
                  {/* Cart items list */}
                  <div className="mt-6 space-y-6">
                    {/* Cart Item 1 */}
                    <div className="flex items-start space-x-4">
                      {/* Quantity controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-lg">
                          <button 
                            aria-label="Decrease quantity"
                            title="Decrease quantity"
                            className="px-3 py-1 text-gray-600 hover:text-blue-500"
                          >
                            <i className="fas fa-minus" aria-hidden="true"></i>
                          </button>
                          <input 
                            type="text" 
                            value="1" 
                            className="w-12 text-center border-x" 
                            readOnly 
                            aria-label="Quantity"
                          />
                          <button 
                            aria-label="Increase quantity"
                            title="Increase quantity"
                            className="px-3 py-1 text-gray-600 hover:text-blue-500"
                          >
                            <i className="fas fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <button 
                          aria-label="Remove item"
                          title="Remove item"
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <i className="fas fa-trash-alt" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>

                    {/* Repeat similar button fixes for other cart items */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white shadow-sm rounded-lg sticky top-24">
                <div className="p-6">
                  {/* Checkout button */}
                  <div className="mt-6">
                    <button 
                      aria-label="Proceed to checkout"
                      title="Proceed to checkout"
                      className="w-full bg-blue-500 text-white py-3 font-medium hover:bg-blue-600 transition-colors rounded-lg"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CartPage;