/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets/";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");


  return (
    <nav
      className={
        "${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary"
      }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white flex text-[18px] font-bold cursor-pointer">
            Bogonko &nbsp;<span className="sm:block hidden"> | Dev_Stand</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li 
              key={nav.id}
              className={'${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer'}
              onClick={() => setActive(nav.title)}>
              <a href={'#${nav.id}'}>{nav.title}</a>
            </li>
            ))}
        </ul>

        <div className="sm:hidden flex items-center flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px] cursor-pointer object-contain" 
            onClick={() => setToggle(!toggle)} 
            />
          <div 
          className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 black-gradient p-6 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((nav) => (
            <li 
            key={nav.id} 
            className={'${active === nav.title ? "text-white" : "text-secondary"} text-[16px] font-medium cursor-pointer font-poppins'} onClick={() => {
              setActive(nav.title) 
              setToggle(!toggle) }}>
              <a href={'#${nav.id}'}>{nav.title}</a>
            </li>
            ))}
        </ul>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
