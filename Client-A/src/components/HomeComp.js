import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to Invest?</span>
            <span className="block text-[#1c50dd]">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/properties"
              passHref={true}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              <button className="ml-3 w-32 h-14 box-border border-2 hover:bg-sky-400 rounded-md border-sky-400 my-4 cursor-pointer">
                View Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
