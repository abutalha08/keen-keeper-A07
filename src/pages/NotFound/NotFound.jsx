import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f5] px-4">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-[120px] font-bold text-[#2f5d50] leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Looks like this friendship link is broken. The page you're looking
          for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 bg-[#2f5d50] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto hover:bg-[#274f44] transition">
            {/* icon */}
            <span><IoHomeOutline /></span>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;