import React from "react";

const ShoweTime = () => {
  return (
    <div className="my-10">
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto text-white">
        <h1 className="text-4xl font-bold">Showe Time</h1>
        <select className="w-full  p-2 py-4 rounded-md bg-zinc-900 text-white border  focus:outline-none ">
          <option value="">Select a name</option>
          <option value="john">John</option>
          <option value="jane">Jane</option>
          <option value="alex">Alex</option>
        </select>
      </div>
    </div>
  );
};

export default ShoweTime;
