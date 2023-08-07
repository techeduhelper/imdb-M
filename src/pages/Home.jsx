import React, { useState, useEffect } from "react";
import CaroselSwiper from "../components/CaroselSwiper";
import LatestMovie from "../components/LatestMovie";

const Home = () => {
  return (
    <>
      <div className="md:px-40 sm:px-4 ">
        <CaroselSwiper />
        <LatestMovie />
      </div>
    </>
  );
};

export default Home;
