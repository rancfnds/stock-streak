// api.jsx

import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
  const [marketNews, setMarketNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo"
      )
      .then((res) => {
        if (res.data && res.data.feed) {
          const newsData = res.data.feed.map((article) => ({
            title: article.title,
            summary: article.summary,
          }));
          setMarketNews(newsData);
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { marketNews };
};

// api/useFetchTopGainersLosers.js
export const useFetchTopGainersLosers = () => {
  const [gainersLosers, setGainersLosers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
      )
      .then((res) => {
        if (res.data.top_gainers) {
          const gainersLosersData = res.data.top_gainers.map((gain) => ({
            company: gain.ticker,
            percentage: gain.change_percentage,
            price :gain.price,
            change_amount:gain.change_amount,
            change_percentage:gain.change_percentage
          })); // Adjust based on actual response structure

          setGainersLosers(gainersLosersData);
        } else {
          console.error("Unexpected response structure:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { gainersLosers };
};
