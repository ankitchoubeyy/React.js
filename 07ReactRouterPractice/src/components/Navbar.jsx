import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between bg-slate-300 font-mono w-full h-[60px]">
      <Link to= "/">
      <h1>Navbar</h1>
      </Link>

      <ul>
        <li>
            <NavLink
            to="/"
            className={({isActive}) => `text-2xl text-Yellow ${isActive ? "text-orange-700" : "text-gray-600"}`}
            >
            Home 
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/about"
            className={({isActive}) => `text-2xl text-Yellow ${isActive ? "text-orange-700" : "text-gray-600"}`}
            >
            About
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/contact"
            className={({isActive}) => `text-2xl text-Yellow ${isActive ? "text-orange-700" : "text-gray-600"}`}
            >
            About
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/Service"
            className={({isActive}) => `text-2xl text-Yellow ${isActive ? "text-orange-700" : "text-gray-600"}`}
            >
            Service
            </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
