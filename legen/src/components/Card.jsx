import React from "react";
import Movies from "../data/Movies";
import { Link } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import Offers from "../data/Offers";

const Card = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const generateDates = () => {
    const today = dayjs();
    return Array.from({ length: 14 }, (_, i) => today.add(i, "day"));
  };
  return (
    <div className="flex flex-col justify-center items-center px-60 pb-3  2xl:mx-auto top-0  mb-5 p-4">
      <div className="flex flex-col px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto space-y-4">
        <h1 className="text-white text-5xl font-bold">Now Showing</h1>
        <div className="flex w-full overflow-x-scroll space-x-3 no-scrollbar  py-2">
          {generateDates().map((date) => {
            const formatted = date.format("YYYY-MM-DD");
            const isSelected = formatted === selectedDate;

            return (
              <button
                key={formatted}
                onClick={() => setSelectedDate(formatted)}
                className={`flex flex-col w-60 items-center px-20 py-4 rounded-lg border 
                ${
                  isSelected
                    ? "border-white bg-zinc-900"
                    : "border-zinc-600 bg-black"
                } 
                text-white bg-amber-700`}
              >
                <span className="text-sm">{date.format("ddd")}</span>
                <span className="text-lg font-bold">{date.format("D")}</span>
                <span className="text-xs">{date.format("MMM")}</span>
              </button>
            );
          })}
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-5 justify-items-center p-3">
        {Movies.map((e) => (
          <li
            key={e.id}
            className="w-72 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-lg text-white p-5 hover:shadow-2xl hover:scale-105 duration-300 transition-all"
          >
            <Link to={`/movie/${e.id}`}>
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
