import React from "react";
import { useFetchTopGainersLosers } from "../Api/api";

const SectorPerformance = () => {
  // Fetching data using custom hook for top gainers and losers
  const { gainersLosers } = useFetchTopGainersLosers();

  // Ensure we only take the first 11 items from gainersLosers
  const trimmedData = gainersLosers.slice(0, 11);

  console.log(trimmedData); // Log trimmed data for debugging purposes

  return (
    <div className="text-white w-full">
      {/* Main container for sector performance */}
      <div className="bg-neutral-950 p-9 rounded-lg h-full sm:flex gap-3 justify-between md:gap-6 lg:h-96">
        <div>
          <h1 className="font-bold pb-9">Sector performance</h1>
          <div className="flex gap-28 justify-between">
            {/* Left column: Displaying the first 5 sectors */}
            <div>
              <h1 className="font-bold underline underline-offset-8 pb-2">
                All Sectors
              </h1>
              {trimmedData.slice(0, 5).map((item, index) => (
                <h1 key={index} className="pb-3 text-slate-600">
                  {item.company}
                </h1>
              ))}
            </div>
            {/* Right column: Displaying percentage change for the first 5 sectors */}
            <div>
              <h1 className="font-bold pb-2">+0.899%</h1>
              {trimmedData.slice(0, 5).map((item, index) => (
                <h1
                  key={index}
                  className="text-center mb-3 font-medium text-green-700 bg-gradient-to-r from-black from-50% to-green-800 rounded-sm"
                >
                  {parseFloat(item.percentage).toFixed(1)}%
                </h1>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 sm:pt-0 lg:pt-0">
          {/* Secondary section: Displaying % price change */}
          <h1 className="font-semibold pb-9 text-slate-700 lg:pl-24">% price change</h1>
          <div className="flex gap-28 justify-between">
            {/* Left column: Displaying the next 6 sectors */}
            <div>
              {trimmedData.slice(5, 11).map((item, index) => (
                <h1 key={index} className="text-slate-600 gap-2 pb-3 font-medium">
                  {item.company}
                </h1>
              ))}
            </div>
            {/* Right column: Displaying percentage change for the next 6 sectors */}
            <div>
              {trimmedData.slice(5, 11).map((item, index) => (
                <h1
                  key={index}
                  className="text-center mb-3 font-medium text-green-700 bg-gradient-to-r from-black from-50% to-green-800 rounded-sm"
                >
                  {parseFloat(item.percentage).toFixed(2)}%
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorPerformance;
