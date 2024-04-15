"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const route = useRouter();
  return (
    <nav className="bg-white border-gray-200 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center">
          <img
            src="https://utfs.io/f/3210f278-5038-47bc-8d71-7b2d4117bad5-1njyzc.png"
            className="h-10"
            alt="Logo"
          />
          <span className="self-right font-serif mt-5 -ml-4 text-1xl whitespace-nowrap">
            Landscape
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button
            onClick={() => {
              route.push("/contact");
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contact Us
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
