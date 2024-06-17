// Hamburger.js
import { LuCompass } from "react-icons/lu";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { RiSearch2Line } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const Hamburger = ({ isOpen, toggleMenu }) => {
    return (
        <div 
            className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="p-4">
                <button 
                    onClick={toggleMenu} 
                    className="text-black text-lg absolute top-4 right-4"
                >
                    X
                </button>
                <ul className="mt-10 space-y-2">
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 flex items-center gap-2">
                            <LuCompass />
                            For you
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 flex items-center gap-2">
                            <HiOutlinePresentationChartLine />
                            Screener
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 flex items-center gap-2">
                            <RiSearch2Line />
                            Search
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hamburger;
