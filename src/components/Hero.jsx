import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" mt-2">
      <div className="bg-rose-200 rounded-xl h-[50vh] text-white">
        <div className="">
          <div className="">
            <div className=""></div>New Trend
          </div>
          <h1 className="">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={"/"} className="">
            Discover More
          </Link>
        </div>
        <div className="">
          <img src="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
