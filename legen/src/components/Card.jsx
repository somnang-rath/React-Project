import React from "react";
import p1 from "../assets/img/movies/3.jpg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="p-10 sm:px-20 2xl:max-w-7xl 2xl:mx-auto mb-5">
      <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
        <li className="max-w-sm bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-10 hover:shadow-2xl duration-300 transition-all">
          <Link to={"1"}>
            <img src={p1} alt="" className="rounded" />
            <div>
              <p>27 May 2025</p>
              <p>R18</p>
            </div>
            <p>Blood Brothers: Bara Naga</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Card;
