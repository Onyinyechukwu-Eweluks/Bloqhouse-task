import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <header className="bg-[#1c50dd] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-row">
          <h1 className="text-3xl font-bold text-white">
            <Link href="/">Bloqhouse</Link>
          </h1>
          <div className="absolute top-30 left-80">
            <ul className="navbar-nav flex flex-col px-6 py-1 list-style-none mr-auto">
              <li className="nav-item px-2 text-xl font-semibold text-white">
                <Link
                  className="nav-link active  "
                  aria-current="page"
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
