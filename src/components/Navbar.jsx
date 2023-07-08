import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-logo font-bold text-3xl">FinDataX.</h1>
      <ul className="hidden md:flex">
        <li className="px-4 py-4">Home</li>
        <li className="px-4 py-4">Company</li>
        <li className="px-4 py-4">Resources</li>
        <li className="px-4 py-4">About</li>
        <li className="px-4 py-4">Contact</li>
      </ul>
      <div onClick={toogleMenu} className="block md:hidden">
        {showMenu ? (
          <AiOutlineClose size={20} onClick={toogleMenu} />
        ) : (
          <AiOutlineMenu size={20} onClick={toogleMenu} />
        )}
      </div>
      <div
        className={
          showMenu
            ? "md:hidden mt-3 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-base ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500 top-0 w-[60%] h-full border-r border-r-gray-900 bg-base"
        }
      >
        <h1 className="w-full text-logo font-bold text-3xl m-4">FinDataX.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
