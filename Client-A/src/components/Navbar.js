import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <header className="bg-[#1c50dd] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            <Link href="/">Bloqhouse</Link>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
