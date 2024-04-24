import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.png";
import HeroImg2 from "../assets/hero1.png";

const Hero = () => {
  return (
    <section className=" mt-2 border-[2px] rounded-xl ">
      <div className=" rounded-xl text-black w-full h-[400px]  py-1 px-3 sm:flex items-center justify-center">
        <div className="flex flex-col justify-between items-center w-full gap-5 ">
          <img src={HeroImg} className="w-[300px] sm:hidden" />
          <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6">
            <p className="text-[1.4rem] md:text-[2rem] lg:text-[3rem] ">
              New Trends
            </p>
            <h1 className="font-semibold text-2xl md:text-4xl lg:text-6xl">
              SALE 50% OFF <br />
            </h1>
            <Link
              to={"/"}
              className="bg-black text-white px-4 py-2 text-xl rounded-md hover:text-gray-400 cursor-pointer md:text-3xl lg:text-4xl"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={HeroImg2} className="w-[1000px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
