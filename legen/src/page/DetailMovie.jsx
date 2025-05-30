import React from "react";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { id } = useParams();
  return <div className="mt-30 font-semibold bg-amber-400">{id}</div>;
};

export default DetailMovie;
