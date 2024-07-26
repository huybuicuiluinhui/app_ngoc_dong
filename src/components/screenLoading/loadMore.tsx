import React from "react";

const LoadMore = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce2"></div>
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
        </div>
        <div className="mt-1 text-center">
          <p className="text-sm font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadMore;
