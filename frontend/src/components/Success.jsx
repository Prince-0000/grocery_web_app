import React from "react";
import { TiTick } from 'react-icons/ti'

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[8rem]">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mx-[16rem] text-green-600 mb-6"><TiTick/></div>
        <h1 className="text-4xl font-bold mb-6 text-green-600">Order Successful!</h1>
        <p className="text-lg text-gray-800">
          Thank you for shopping with us. Your order has been successfully placed.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="text-green-600 hover:text-green-700 font-semibold px-4 py-2 rounded-md bg-green-200 transition-colors duration-300"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
