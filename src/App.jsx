import Sidebar from "./Components/sidebar";
import NavBar from "./Components/Navbar";
import Overview from "./Components/overview";
import SectorPerformance from "./Components/sectorPerformance";
import MarketList from "./Components/marketList";
const App = () => {
  return (
    
    <div className="flex">

      
      <Sidebar />
      <div className="pl-16">
        <NavBar />

        {/* First main section with Overview and SectorPerformance */}
        <main className="pl-16 pt-9 pr-16  gap-6 lg:flex">
          <Overview />
          <SectorPerformance />
        </main>

        {/* Heading for MarketList */}
        <h1 className="pl-16 pt-9 text-white">Markets</h1>

        {/* Second main section with MarketList */}
        <main className="pl-16 pt-4 pb-10 pr-16 flex flex-wrap gap-6">
          <MarketList />
        </main>
      </div>
    </div>
  );
};

export default App;
