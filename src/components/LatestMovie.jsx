import React, { useState, useEffect } from "react";
import { POPULAR_API_URL } from "../api/api";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const LatestMovie = () => {
  const [latestMovie, setLatestMovie] = useState([]);

  const getLatestMovie = async () => {
    const { data } = await axios.get(POPULAR_API_URL);
    setLatestMovie(data?.results);
  };

  useEffect(() => {
    getLatestMovie();
  }, []);

  return (
    <>
      <div>
        <span className="text-black dark:text-white text-xl text-center ">
          Latest Movies-2023
        </span>
        <Carousel responsive={responsive}>
          {latestMovie?.map((lm) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${lm.backdrop_path}`}
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default LatestMovie;
