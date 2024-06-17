import React, { useState, useEffect } from "react";
import { LuCompass } from "react-icons/lu";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineBookmarkAdd, MdVerified } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Navbar = () => {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); // State for current date and time

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Effect to update current date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Format current date
  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format current time
  const formattedTime = currentDateTime.toLocaleTimeString("en-US");

  return (
    <>
      {/* Header section */}
      <header className="text-white p-6 flex justify-between items-center pt-7">
        {/* Left section */}
        <div className="flex-none w-30 items-center pl-5 pt-4">
          <div className="flex flex-col gap-2">
            {/* User greeting and verified icon */}
            <div className="text-2xl font-semibold flex items-center gap-2">
              <h1>Hello, User</h1>
              <MdVerified className="text-blue-500" />
            </div>
            {/* Display formatted date */}
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex gap-3">
          {/* Navigation links */}
          <nav className="hidden lg:flex gap-2 pr-10">
            {/* For You button */}
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <LuCompass />
                For you
              </button>
            </a>
            {/* Screener button */}
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <HiOutlinePresentationChartLine />
                Screener
              </button>
            </a>
            {/* Search button */}
            <a href="#" className="hover:text-gray-300 pb-2">
              <button
                onClick={toggleSearch} // Toggle search bar visibility
                type="button"
                className="flex rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <RiSearch2Line />
              </button>
            </a>
          </nav>
          {/* Bookmark button */}
          <div className="flex">
            <a href="#" className="hover:text-gray-300">
              <button
                type="button"
                className="flex rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <MdOutlineBookmarkAdd />
              </button>
            </a>
          </div>
          {/* Hamburger button to toggle the menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden rounded-full justify-between items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-lg p-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Conditional rendering of search bar */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 7.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 10.586l2.293-2.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hamburger menu component */}
      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
