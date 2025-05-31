import React from "react";
import p1 from "../assets/img/movies/3.jpg";
const Card = () => {
  return (
    <div className=" px-60 2xl:px-80 2xl:w-8/12 2xl:mx-auto mb-5">
      <ul className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        <li className="font-bold text-white rounded max-w-[280px] min-w-[280px]">
          <img src={p1} alt="" className="rounded" />
          <div>
            <p>27 May 2025</p>
            <p>R18</p>
          </div>
          <p>Blood Brothers: Bara Naga</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
