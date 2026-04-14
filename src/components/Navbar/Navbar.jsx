import React, { useState } from 'react';
import logoImg from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { MdOutlineHome } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { FiMenu } from "react-icons/fi";

const navClass = ({ isActive }) =>
  isActive
    ? "bg-[#2f5d50] text-white px-3 py-2 rounded flex items-center gap-2"
    : "px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar max-w-11/12 mx-auto flex items-center">

        
        <div className="flex-1 flex justify-between items-center">
          <img src={logoImg} alt="logo" />

          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <FiMenu size={22} />
          </button>
        </div>

   
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li><NavLink to={"/"} className={navClass}><MdOutlineHome /> Home</NavLink></li>
            <li><NavLink to={"/timeline"} className={navClass}><FaRegClock /> Timeline</NavLink></li>
            <li><NavLink to={"/stats"} className={navClass}><ImStatsDots /> Stats</NavLink></li>
          </ul>
        </div>

      </div>

      
      {open && (
        <div className="lg:hidden px-4 pb-3">
          <ul className="menu menu-vertical gap-1">
            <li><NavLink to={"/"} className={navClass} onClick={() => setOpen(false)}><MdOutlineHome /> Home</NavLink></li>
            <li><NavLink to={"/timeline"} className={navClass} onClick={() => setOpen(false)}><FaRegClock /> Timeline</NavLink></li>
            <li><NavLink to={"/stats"} className={navClass} onClick={() => setOpen(false)}><ImStatsDots /> Stats</NavLink></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;