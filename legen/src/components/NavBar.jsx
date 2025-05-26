import React from "react";
import logo from "../assets/Legend-logo.png";
import { NavLink, Link } from "react-router-dom";
import { UserRoundSearch, ShieldCheck, UserRound, Bell } from "lucide-react";
import links from "../data/LinkPage/LinkIcon";
const NavBar = () => {
  return (
    <nav className="px-30 bg-gray-950/30 absolute w-full backdrop-blur-sm z-50">
      {/* Nav Bar  */}
      <div className=" flex justify-between items-center py-4 px-6 border-b-1 ">
        {/** Logo Bar */}
        <img src={logo} alt="Legend" />
        {/** Search Bar */}
        <div className="rounded-full px-3 py-1 border-[1px] border-gray-800 hover:border-gray-500">
          <search className="flex text-white justify-center items-center">
            <input
              type="text"
              placeholder="Search.."
              className="outline-none text-white rounded h-8"
            />
            <UserRoundSearch size={20} />
          </search>
        </div>

        {/** Link Bar */}
        <ul className="flex px-1.5 space-x-3 text-white">
          <li className="rounded-full px-3 py-1 border-[1px] border-gray-800 hover:border-gray-500">
            <Link to={"/"} className="flex">
              <ShieldCheck size={20} />
              Ticket
            </Link>
          </li>
          <li className="rounded-full px-3 py-1 border-[1px] border-gray-500 hover:border-gray-400">
            <Link to={"service"} className="flex">
              <UserRound size={20} />
              Join New
            </Link>
          </li>
          <li className="rounded-full px-3 py-1 border-[1px] border-gray-500 hover:border-gray-400">
            <Link to={"service"} className="flex items-center">
              <Bell size={20} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Small Nav Bar */}
      <div className=" w-full h-10 justify-center items-center content-center">
        <ul className="flex space-x-4 text-white text-xs">
          {links.map((e) => (
            <li key={e.label} className="flex items-center space-x-2">
              <NavLink
                to={e.path}
                className={({ isActive }) => `
                flex items-center space-x-2 font-semibold  ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`}
              >
                <e.icon size={18} />
                <span>{e.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
