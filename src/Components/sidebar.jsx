import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BsBookmarkDash } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import { BiLogoFlutter } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 bg-black w-16 h-full border-r border-gray-800 flex flex-col justify-center">
      {/* Logo at the top */}
      <div className="flex items-center justify-center w-16 h-16 mb-4">
        <BiLogoFlutter className="text-white text-2xl" />
      </div>

      {/* Menu items */}
      <div className="p-4 flex flex-col items-center gap-11">
        {/* Home Icon */}
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#" className="group">
              <div className="flex items-center justify-center border-r border-transparent group-hover:border-r-blue-700 w-16 h-16">
                <IoHomeOutline className="text-gray-600 text-2xl group-hover:text-blue-700" />
              </div>
            </a>
          </li>
        </ul>

        {/* Search Icon */}
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#" className="group">
              <div className="flex items-center justify-center border-r border-transparent group-hover:border-r-blue-700 w-16 h-16">
                <FaSearch className="text-gray-600 text-2xl group-hover:text-blue-700" />
              </div>
            </a>
          </li>
        </ul>

        {/* Book Icon */}
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#" className="group">
              <div className="flex items-center justify-center border-r border-transparent group-hover:border-r-blue-700 w-16 h-16">
                <IoMdBook className="text-gray-600 text-2xl group-hover:text-blue-700" />
              </div>
            </a>
          </li>
        </ul>

        {/* Bookmark Icon */}
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#" className="group">
              <div className="flex items-center justify-center border-r border-transparent group-hover:border-r-blue-700 w-16 h-16">
                <BsBookmarkDash className="text-gray-600 text-2xl group-hover:text-blue-700" />
              </div>
            </a>
          </li>
        </ul>

        {/* Settings Icon */}
        <ul className="flex flex-col items-center size-2">
          <li>
            <a href="#" className="group">
              <div className="flex items-center justify-center border-r border-transparent group-hover:border-r-blue-700 w-16 h-16">
                <RiSettingsLine className="text-gray-600 text-2xl group-hover:text-blue-700" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
