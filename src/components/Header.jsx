import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`shadow-lg rounded-xl border-2 bg-white z-10 ${
        isActive ? "fixed top-0 left-0 w-full" : ""
      }`}
    >
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
            {itemAmount}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
