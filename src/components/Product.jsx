import React from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  return (
    <div className="border-2 border-black rounded-xl">
      <div className=" h-[410px] w-[280px] relative  group transition">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center mb-10">
            <img
              className="max-h-[200px] group-hover:scale-110 transition duration-300"
              src={image}
            />
          </div>
          <div className="px-3 text-center flex flex-col gap-1">
            <p className="text-[1.2rem] capitalize text-gray-500 font-medium">
              {category}
            </p>
            <Link to={`/product/${id}`}>
              <h2 className="text-[1rem]">{title}</h2>
            </Link>
            <div className="font-semibold text-[1.5rem]">₹ {price}</div>
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
