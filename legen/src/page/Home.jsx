import React from "react";
import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-full">
        <ImageSlider />
        <Card />
      </div>
    </div>
  );
};

export default Home;
