import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBookmarkStarFill, BsSun } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-row items-center bg-slate-100 w-full md:px-40 sm:px-4 py-3 dark:bg-slate-500  dark:text-white dark:hover:text-black fixed z-10">
        <div className="flex gap-5 items-center">
          <div className="flex cursor-pointer">
            <span className="px-3 py-2 bg-yellow-500 text-2xl rounded-tl-md rounded-bl-md font-bold">
              IMDB
            </span>
            <span className="inline text-2xl px-3 py-2 bg-black dark:bg-white text-white dark:text-black rounded-tr-md rounded-br-md">
              M
            </span>
          </div>
          <div className="menu-button flex items-center gap-2 hover:bg-gray-200 cursor-pointer py-2 px-5 hover:rounded-md">
            <AiOutlineMenu size={20} />
            <span className="text-black dark:text-white font-semibold text-[1.2rem] dark:hover:text-black">
              Menu
            </span>
          </div>
          <div className="search-bar-container flex items-center bg-white gap-3 rounded-md w-[600px]  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none hover:shadow-lg transition ease-in-out">
            <div className="all-button border-r border-y-black px-5 py-2 cursor-pointer font-semibold font-sans hover:bg-slate-300 hover:rounded-tl-md hover:rounded-bl-md dark:text-black">
              All
            </div>
            <input
              className="py-2 w-full border-none outline-none pr-2 rounded-r-md flex-grow-1  "
              type="search"
              name="search "
              id=""
              placeholder="Searrch IMDB-M"
            />
            <BiSearchAlt2
              size={40}
              className=" hover:bg-slate-200 pr-2 pl-1 hover:rounded-tr-md hover:rounded-br-md cursor-pointer dark:text-black"
            />
          </div>
          <div className="pro-button flex py-2 px-3 hover:bg-slate-200 cursor-pointer hover:rounded-md">
            <span className=" inline font-medium">IMDB</span>
            <span className="inline font-medium text-yellow-400">M</span>
            <span className="text-blue-400 font-bold ml-1">Pro</span>
          </div>
          <div className="border border-black h-[35px]"></div>
          <div className="watlist flex gap-2 items-center py-2 px-3 hover:rounded-md hover:bg-slate-200 cursor-pointer">
            <BsBookmarkStarFill size={28} />
            <span className="font-bold">Watchlist</span>
          </div>
          <div className="sign-in-button hover:bg-slate-200 hover:rounded-md py-2 px-3 cursor-pointer font-semibold">
            <span className="text-lg">Sign In</span>
          </div>
          <div
            className="cursor-pointer py-2 px-3 hover:bg-slate-200 hover:rounded-md hover:text-black dark:hover:text-white"
            onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
          >
            {darkMode ? <GiMoon size={30} /> : <BsSun size={30} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
