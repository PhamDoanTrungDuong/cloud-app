//@ts-nocheck
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] bg-zinc-200 z-10 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
            CLOUD.
          </h1>
          <ul className="hidden md:flex">
            <li className="hover:scale-125 duration-300 hover:underline hover:underline-offset-8">
              <Link to="home" smooth={true} duration={600}>
                Home
              </Link>
            </li>
            <li className="hover:scale-125 duration-300 hover:underline hover:underline-offset-8">
              <Link to="about" smooth={true} offset={-200} duration={600}>
                About
              </Link>
            </li>
            <li className="hover:scale-125 duration-300 hover:underline hover:underline-offset-8">
              <Link to="support" smooth={true} offset={-50} duration={600}>
                Support
              </Link>
            </li>
            <li className="hover:scale-125 duration-300 hover:underline hover:underline-offset-8">
              <Link to="platforms" smooth={true} offset={-100} duration={600}>
                Platforms
              </Link>
            </li>
            <li className="hover:scale-125 duration-300 hover:underline hover:underline-offset-8">
              <Link to="pricing" smooth={true} offset={-50} duration={600}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black underline underline-offset-8">
            Sign In
          </button>
          <button>Sign Up</button>
        </div>
        <div onClick={() => handleNav()} className="p-2 md:hidden">
          {!nav ? (
            <AiOutlineMenu size={20} className="cursor-pointer" />
          ) : (
            <AiOutlineClose size={20} className="cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "absolute w-full px-8 flex flex-col bg-zinc-200 duation-300"
            : "hidden duration-300"
        }
      >
        <ul>
          <li>
            <Link onClick={handleClose} to="home" smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={600}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={600}>
              Support
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={600}>
              Platforms
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={600}>
              Pricing
            </Link>
          </li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 py-3 mb-4 hover:bg-indigo-600 hover:text-white">
              Sign In
            </button>
            <button className="py-3 mb-4">Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
