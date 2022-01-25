import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block grid justify-center">About Us</span>
            <span className="block text-[#1c50dd]">
              The all-in-one fund management platform.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
