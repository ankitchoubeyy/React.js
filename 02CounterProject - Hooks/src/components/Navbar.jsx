import React from "react";

function Navbar() {
  return (
    <div>
      <nav classNameName="dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4 bg-sky-400">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              Counter Project
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
