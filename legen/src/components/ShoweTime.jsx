import React, { useState } from "react";
import { Volume2, MessageCircle } from "lucide-react";
import S_2D from "../assets/img/screen/S_2D.png";
import Locations from "../data/Locations";

const ShoweTime = () => {
  const [location, setLocation] = useState(Locations);
  return (
    <div className="my-10">
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto text-white">
        <h1 className="text-4xl font-bold">Showe Time</h1>
        <select className="w-full  p-2 py-4 rounded-md bg-zinc-900 text-white border  focus:outline-none ">
          <option value="All Locations" className="">
            All Locations
          </option>
          {Locations.map((e) => (
            <option key={e.id} value={e.name} className="p-9">
              {e.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          {location.map((e) => (
            <li key={e.id}>
              <div className="w-full bg-gray-700 my-5">
                <h1 className="px-20 py-5 2xl:px-0 2xl:w-8/12 2xl:mx-auto text-white text-3xl font-bold ">
                  {e.name}
                </h1>
                <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90%  shadow-2xl"></div>
              </div>
              <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto text-white space-y-7">
                <img src={S_2D} alt={S_2D} className="w-20" />
                <div className="flex items-center space-x-3">
                  <Volume2 />
                  <h1 className="text-xl font-bold">KH</h1>
                  <div className="w-[2px] h-6 bg-white"></div>
                  <MessageCircle />
                  <h1 className="text-xl font-bold">ENG</h1>
                  <div className="w-[2px] h-6 bg-white"></div>
                  <h1>NAMME</h1>
                </div>
                <div className="space-x-4">
                  <button className="px-8 py-4 border rounded-full text-xl font-bold hover:bg-gray-400 transition-all duration-500 cursor-pointer">
                    08:00 PM
                  </button>
                  <button className="px-8 py-4 border rounded-full text-xl font-bold hover:bg-gray-400 transition-all duration-500 cursor-pointer">
                    100:00 PM
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoweTime;
