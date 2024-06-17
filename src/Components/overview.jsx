import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useFetchData } from "../Api/api";

const Overview = () => {
  const { marketNews } = useFetchData();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex < marketNews.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // Adjust the delay (in milliseconds) between each news item here

    return () => clearInterval(interval);
  }, [marketNews]);

  return (
    <div className="text-white flex-none w-fill pb-5 bg-neutral-950 p-9 rounded-lg h-full w-45 mb-3 overflow-hidden lg:h-96 lg:w-5/12  ">
      <div className="flex gap-2 items-center pb-4">
        <h1 className="bg-zinc-900 font-bold text-sm rounded-2xl  px-4 lg:text-lg ">
          The Market is <span className="text-green-700">Bullish</span>
        </h1>
        <MdArrowOutward className="text-green-700 bg-zinc-900 rounded-2xl w-8 h-8" />
      </div>
      <div className="pt-10">
        <div className="mt-4 overflow-hidden">
          {marketNews.length > 0 ? (
            <div>
              <h2>{marketNews[currentNewsIndex].title}</h2>
              <p className="font-bold pt-3">
                {marketNews[currentNewsIndex].summary}
              </p>
            </div>
          ) : (
            <p>No news available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
