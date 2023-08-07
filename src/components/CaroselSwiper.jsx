import React, { useState, useEffect } from "react";
import axios from "axios";
import { NOWPLAYING_API_URL } from "../api/api.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Poster from "./Poster.jsx";
import { AiFillPlayCircle } from "react-icons/ai";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CaroselSwiper = () => {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const { data } = await axios.get(NOWPLAYING_API_URL);
    setMovies(data?.results);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <div className="flex w-full pt-20 items-center sm:flex-col xl:flex-row ">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          className="lg:w-2/3 sm:w-full pt-0"
        >
          {movies?.map((movie) => (
            <div className="shadow-[inset_13px_-116px_59px_0px_#1a202c] bg-blend-darken">
              <img
                className=""
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="backdrop_path"
                key={movie.id}
                height="300px"
              />
              <div className="flex  bg-blend-screen z-10 ">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  width={"150px"}
                  className="pl-3 pt-2 pb-3 mt-[-83px] z-10 h-60"
                />
                <AiFillPlayCircle
                  size={90}
                  className="px-4 pt-3 text-white dark:text-white"
                />
                <div className="flex flex-col px-3 py-5">
                  <span className="text-white dark:text-white text-4xl ">
                    {movie.title}
                  </span>
                  <span className="text-2xl cursor-pointer text-white dark:text-white pt-2">
                    Watch Trailor
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <Poster movies={movies} />
      </div>
    </>
  );
};

export default CaroselSwiper;
