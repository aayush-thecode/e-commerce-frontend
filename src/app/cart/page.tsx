'use client';

import Head from 'next/head';
import Image from 'next/image';


const cartItems = [
  {
    id: 1,
    title: 'Dhaka Topi - Handmade',
    size: 'M',
    price: 1500,
    originalPrice: 1800,
    image: '/cart/dhaka.svg',
  },
  {
    id: 2,
    title: 'Handwoven Pashmina Shawl',
    color: 'Navy Blue',
    price: 3500,
    image: '/cart/pashmina.svg',
  },
  {
    id: 3,
    title: 'Traditional Singing Bowl',
    size: 'Medium',
    price: 2800,
    image: '/cart/singing-bowl.svg',
  },
];

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart - Nepali Bazar</title>
      </Head>

      <div className="font-poppins min-h-screen flex-grow">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-8">
              <h2 className="text-xl font-semibold mb-4">Shopping Cart ({cartItems.length} items)</h2>
              <div className="bg-white rounded-lg shadow-sm divide-y">

                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4">
                    <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                    <div className="flex-1">
                      <h3 className="text-md font-semibold">{item.title}</h3>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                      {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                      <div className="mt-1 flex items-center space-x-2">
                        <span className="text-gray-800 font-medium">NPR {item.price.toLocaleString()}</span>
                        {item.originalPrice && (
                          <span className="line-through text-sm text-gray-400">NPR {item.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center border rounded-md">
                        <button className="px-3 py-1 text-gray-600 hover:text-orange-500">-</button>
                        <input
                          type="text"
                          value="1"
                          readOnly
                          aria-label="Quantity"
                          className="w-10 text-center border-x"
                        />
                        <button className="px-3 py-1 text-gray-600 hover:text-orange-500">+</button>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 text-lg">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-8 lg:mt-11">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>NPR 7,800</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg mb-4">
                  <span>Total</span>
                  <span>NPR 7,800</span>
                </div>
                <label className="flex items-center mb-4">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Cash on Delivery
                </label>
                <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium py-3 rounded-lg">
                  Proceed to Checkout
                </button>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span><i className="fas fa-lock mr-1" />Secure Checkout</span>
                  <span><i className="fas fa-shield-alt mr-1" />100% Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </main>


      </div>

      {/* Footer */}
        <footer className="border-t border-b border-gray-300 mt-12 bg-white shadow-sm">
        <div className="flex justify-center py-6">
        <p className="text-sm text-gray-600">© 2024 Nepali Bazar. All rights reserved.</p>
        </div>
        </footer>
    </>
  );
};

export default CartPage;
