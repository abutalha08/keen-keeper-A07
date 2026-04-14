import React from 'react';
import logoImg from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-11/12 mx-auto">
  <div className="flex-1">
    <img src={logoImg} alt="logo" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Timeline</a></li>
      <li><a>Stats</a></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;