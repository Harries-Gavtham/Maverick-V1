import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="shadow-lg">
      <nav className="flex justify-between items-center px-3 py-2 rounded-xl  ">
        <Link href="#">
          <img className="h-[50px]" src={Logo} />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer"
        >
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

export default Header;
