import React from "react";

const Poster = ({ movies }) => {
  return (
    <>
      <div className="sm:w-full xl:w-1/3">
        <span className="text-xl text-yellow-400 pl-6 font-bold cursor-pointer">
          Up Next
        </span>
        {movies?.splice(0, 3).map((movie) => (
          <div className="flex p-1 bg-[#101010] mb-3 ml-4 text-white cursor-pointer hover:shadow-slate-600">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="Movie poster"
              width={"150px"}
              className="h-41 py-2 px-3"
              key={movie.id}
            />
            <span className="text-xl">{movie.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Poster;
