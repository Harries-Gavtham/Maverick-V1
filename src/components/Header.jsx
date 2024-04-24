import React from "react";
import Logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="">
      <nav className="bg-teal-400 flex justify-between items-center px-3 py-2 rounded-xl ">
        <Link href="#">
          <img className="h-[50px]" src={Logo} />
        </Link>
        <div className="relative">
          <button>
            <HiOutlineShoppingBag size={40} />
          </button>
          <div className="bg-red-500 w-[20px] h-[20px] rounded-full absolute bottom-0 -right-1 text-white font-semibold text-[14px] flex justify-center items-center">
            1
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
