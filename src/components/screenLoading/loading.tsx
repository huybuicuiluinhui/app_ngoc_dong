import React from "react";

const LoadingScreen = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <div className="mt-2 text-center">
          <p className="text-lg font-semibold text-gray-700">Loading </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
