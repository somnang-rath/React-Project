import React from "react";
import Movies from "../data/Movies";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex justify-center items-center px-60 pb-3  2xl:mx-auto top-0  mb-5 p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-5 justify-items-center p-3">
        {Movies.map((e) => (
          <li
            key={e.id}
            className="w-72 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-5 hover:shadow-2xl hover:scale-105 duration-300 transition-all"
          >
            <Link to={e.id.toString()}>
              <img
                src={e.movie_image}
                alt={e.title_movie}
                className="w-full  rounded-lg mb-3"
              />
              <div className="flex justify-between text-sm mb-2">
                <p>{e.release}</p>
                <p>R18</p>
              </div>
              <p className="text-lg font-semibold">{e.title_movie}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
