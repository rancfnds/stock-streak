import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { MdArrowForwardIos } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const ChartOverview = () => {
  const [selectedRange, setSelectedRange] = useState("1D");
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  });

  const timeRanges = ["1D", "1W", "1M", "3M", "1Y", "All"];

  useEffect(() => {
    fetchChartData(selectedRange);
  }, [selectedRange]);

  const fetchChartData = (range) => {
    // Fetch data from API based on the selected range and update chart data
    let newChartData;

    switch (range) {
      case "1D":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
              name: "series2",
              data: [11, 32, 45, 32, 34, 52, 41],
            },
          ],
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        };
        break;
      case "1W":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [50, 60, 70, 80, 90, 100, 110],
            },
            {
              name: "series2",
              data: [20, 30, 40, 50, 60, 70, 80],
            },
          ],
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-20T00:00:00.000Z",
            "2018-09-21T00:00:00.000Z",
            "2018-09-22T00:00:00.000Z",
            "2018-09-23T00:00:00.000Z",
            "2018-09-24T00:00:00.000Z",
            "2018-09-25T00:00:00.000Z",
          ],
        };
        break;
      // Add cases for other time ranges here...
      case "1M":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [60, 70, 80, 90, 100, 110, 120],
            },
            {
              name: "series2",
              data: [30, 40, 50, 60, 70, 80, 90],
            },
          ],
          categories: [
            "2018-09-01T00:00:00.000Z",
            "2018-09-05T00:00:00.000Z",
            "2018-09-10T00:00:00.000Z",
            "2018-09-15T00:00:00.000Z",
            "2018-09-20T00:00:00.000Z",
            "2018-09-25T00:00:00.000Z",
            "2018-09-30T00:00:00.000Z",
          ],
        };
        break;
      case "3M":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [70, 80, 90, 100, 110, 120, 130],
            },
            {
              name: "series2",
              data: [40, 50, 60, 70, 80, 90, 100],
            },
          ],
          categories: [
            "2018-07-01T00:00:00.000Z",
            "2018-07-15T00:00:00.000Z",
            "2018-08-01T00:00:00.000Z",
            "2018-08-15T00:00:00.000Z",
            "2018-09-01T00:00:00.000Z",
            "2018-09-15T00:00:00.000Z",
            "2018-09-30T00:00:00.000Z",
          ],
        };
        break;
      case "1Y":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [80, 90, 100, 110, 120, 130, 140],
            },
            {
              name: "series2",
              data: [50, 60, 70, 80, 90, 100, 110],
            },
          ],
          categories: [
            "2017-09-19T00:00:00.000Z",
            "2017-12-19T00:00:00.000Z",
            "2018-03-19T00:00:00.000Z",
            "2018-06-19T00:00:00.000Z",
            "2018-09-19T00:00:00.000Z",
            "2018-12-19T00:00:00.000Z",
            "2019-03-19T00:00:00.000Z",
          ],
        };
        break;
      case "All":
        newChartData = {
          series: [
            {
              name: "series1",
              data: [90, 100, 110, 120, 130, 140, 150],
            },
            {
              name: "series2",
              data: [60, 70, 80, 90, 100, 110, 120],
            },
          ],
          categories: [
            "2010-09-19T00:00:00.000Z",
            "2011-09-19T00:00:00.000Z",
            "2012-09-19T00:00:00.000Z",
            "2013-09-19T00:00:00.000Z",
            "2014-09-19T00:00:00.000Z",
            "2015-09-19T00:00:00.000Z",
            "2016-09-19T00:00:00.000Z",
          ],
        };
        break;
      default:
        newChartData = {
          series: [
            {
              name: "series1",
              data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
              name: "series2",
              data: [11, 32, 45, 32, 34, 52, 41],
            },
          ],
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        };
    }

    setChartData(newChartData);
  };

  const chartOptions = {
    series: chartData.series,
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: chartData.categories,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div className="pb-3 flex justify-between">
        <div>
          <div className="flex items-center">
            <h1>SPDR S&P 500 F&O</h1>
            <MdArrowForwardIos />
          </div>
          <span className="text-gray-600 size-1">489.84</span>
        </div>

        <div className="flex">
          <div className="items-center flex">
            <LuDot className="size-9 text-white" />
            <h1 className="font-normal text-xs">S&P 500</h1>
          </div>
          <div className="items-center flex">
            <LuDot className="size-9 text-orange-400" />
            <h1 className="font-normal text-xs">Moving average</h1>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-70 bg-gray-100">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height={350}
        />
      </div>

      <div className="flex justify-between mt-4">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-2 py-1 ${
              selectedRange === range
                ? "border-t-2 border-blue-500 text-white"
                : ""
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartOverview;
