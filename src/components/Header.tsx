
import React from "react";
import { FaBars } from "react-icons/fa";

type HeaderProps = {
    toggleSidebar: () => void;
  };
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="rpgui-container framed mb-10 fixed md:top-[30px] w-full md:max-w-[133.33vh] h-[60px] bg-gray-900 border-8 border-yellow-400 text-white flex items-center justify-between p-4 z-10 md:z-30">
      <button onClick={toggleSidebar} className="text-xl md:hidden">
        <FaBars />
      </button>
      <h3 className="text-lg font-bold">
        Welcome to my portfolio!
      </h3>

    </header>
  );
};

export default Header;