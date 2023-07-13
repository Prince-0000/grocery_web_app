import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[8rem]">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl text-red-500 mb-6">&#x26A0;</div>
        <h1 className="text-4xl font-bold mb-6 text-amber-950">Oops! Something Went Wrong</h1>
        <p className="text-lg text-gray-800">
          We apologize for the inconvenience. An unexpected error occurred.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="text-green-800 hover:text-green-900 font-semibold px-4 py-2 rounded-md bg-white shadow transition-colors duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
