import React from "react";
import offers from "../assets/img/slider/offers.jpeg";

const Offers = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url('${offers}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-3 pt-30 backdrop-blur-sm">
          <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto ">
            <div className="flex bg-gray-950 justify-between rounded-lg">
              <img
                src={offers}
                alt={offers}
                className="rounded-lg object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
