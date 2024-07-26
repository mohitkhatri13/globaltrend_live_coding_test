import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import image1 from "../assets/download.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <header className="shadow-md sticky top-0 backdrop-blur-sm bg-[#fffefc80] z-20">
      <div className="flex justify-between items-center py-3 w-11/12 mx-auto">
        <Link to="/" className="flex justify-center items-center gap-x-2">
          <img className="h-11" src={image1} alt="app__logo" />
          <p className=" text-xl font-bold">Global Trend</p>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li className="group relative">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="group relative">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="group relative">
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        {!toggleMenu && (
          <GiHamburgerMenu
            className="block md:hidden text-xl cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <div className="fixed top-0 right-0 w-[33%] h-[100vh] backdrop-blur-2xl bg-[#fffefc8c]  flex flex-col justify-center items-center z-50  md:hidden ">
            <MdOutlineRestaurantMenu
              className="absolute top-4 left-0 cursor-pointer"
              onClick={closeMenu}
            />
            <ul className="text-black text-xl text-center space-y-4 absolute top-10 flex flex-col  justify-center items-center">
              <li className="group relative">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="group relative">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="group relative">
                <NavLink to="/contactus">Contactus</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
