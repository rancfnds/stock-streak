# Stock Dashboard

The Stock Dashboard project is a web application designed to provide users with real-time financial market information and analytics. Key features include:

- Displaying live data for selected market indices and exchange-traded funds (ETFs).
- Interactive charts that allow users to visualize historical data over different time ranges (1D, 1W, 1M, 3M, 1Y, All).
- Listing top gainers and losers in the stock market.
- Providing insights into stock prices, changes, and percentages for informed decision-making.

This project aims to offer a user-friendly interface for tracking stock market trends and making investment decisions based on comprehensive data visualization and analysis.

## Installation

To install and run the project locally, follow these steps:

### STEP 1: Clone the repository:

```bash
git clone https://github.com/rancfnds/stock-streak.git
npm install
npm start
```

https://vitejs.dev/guide/

#### STEP 2: package.json

If the steps mentioned above do not work, please make sure that Node.js is installed on your system and ensure that you are executing the commands in the correct directory where your project is located. If necessary, you may need to build the project by following these steps:

1. Open the "package.json" file located under the "stoc dashboard" directory.
2. Click on the "debug" option, and then select "dev" to initiate the build process.

After the build process completes successfully, the project will connect to a local server. You can access the application through the link that will be provided in the terminal. This link typically leads to the locally hosted version of your web application where you can interact with it.

### Project Structure

The project directory structure includes the following components:

### Components Overview

navbar.jsx

**Description**:
The `navbar.jsx` component handles fetching of live date, day, and year from an external API. It displays this information in the navigation bar of the application, ensuring users have access to current date details at all times.

sidebar.jsx

**Description**:
The `sidebar.jsx` component serves as a quick navigation menu within the application. It includes all the menu items specified in the project documentation, allowing users to easily navigate between different sections or functionalities of the Stock Dashboard.

overview.jsx

**Description**:
The `overview.jsx` component is responsible for fetching live news updates from an API. It displays these updates in real-time within the application, providing users with current market news and insights that can influence their investment decisions.

marketList.jsx

**Description**:
The `marketList.jsx` component displays a list of top gainers and losers in the stock market. It fetches this data from an API source, presenting key information such as company names, stock prices, and percentage changes. This feature helps users stay informed about market trends and performance.

**Note**:
The sector API integration was not implemented due to limitations such as requiring a paid version or unavailability on the provided websites.

Hamburger.jsx

**Description**:
The `Hamburger.jsx` component manages the functionality of the hamburger button in the application. When clicked, it toggles the visibility of the navigation menu, providing a user-friendly experience for mobile and small-screen devices.

chartOverview.jsx

**Description**:
The `chartOverview.jsx` component displays graphical data of stocks and their performance over time. It includes interactive features such as filter buttons (1D, 1W, 1M, 3M, 1Y, All) to dynamically adjust the displayed data based on the selected time range. The component utilizes a third-party API (similar to the one documented) to fetch and visualize stock market data, enhancing user understanding and decision-making capabilities.

**Note**:
The actual graph data source used in the project is based on a similar API, as specific data from the provided documentation sources was not available.

### APIs Used

- [Alpha Vantage - NEWS_SENTIMENT](https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo): Fetches sentiment analysis news for stocks.
- [Alpha Vantage - TOP_GAINERS_LOSERS](https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo): Retrieves top gainers and losers in the stock market.
- [ApexCharts - Area Charts](https://apexcharts.com/javascript-chart-demos/area-charts/spline/): Reference for interactive area charts used in the project.
