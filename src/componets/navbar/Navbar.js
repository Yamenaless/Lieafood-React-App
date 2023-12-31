import React, { useState } from "react";
import { MdViewHeadline } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
import NavLinks from "./navLinks";

const NavBar = () => {
  const [OpenNav, setOpenNav] = useState(false);

  const hundleOnOpen = () => {
    setOpenNav(!OpenNav);
  };
  return (
    <div>
      <nav className=" absolute w-full h-[120px] z-20 top-0 left-0 border-b border-white-200 dark:border-white-600">
        <div className="max-w-[1800px] mx-auto h-full flex flex-wrap items-center justify-between px-8 sm:px-16 lg:px-8 ">
          {/* ======== LOGO START HERE ============ */}
          <Link to={"/liea"} smooth className="flex items-center">
            <img
              src={
                "//uploads-ssl.webflow.com/63c0348e8e38eb4cc747e99e/63f3a6fc6498f4e353ff39d7_logo.svg"
              }
              className="h-18 mr-3"
              alt="Liea Logo"
            />
          </Link>
          {/* ======== LOGO END HERE ============ */}

          {/* ======== BUTTONS START HERE ============ */}
          <div className="flex items-center justify-center text-white space-x-4 text-center md:order-2 ">
            <button className="hidden text-xl md:flex text-center rounded-full backdrop-blur-sm bg-white/20 px-4 py-1">
              Contact us
            </button>

            <button className="hidden text-xl md:flex text-center bg-[#023731] p-1 px-4 rounded-full">
              <Link>AR</Link>
            </button>

            <button
              onClick={hundleOnOpen}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center px-3 py-2 bg-[#023731] justify-center text-4xl text-white-500 rounded-full lg:hidden focus:outline-none "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MdViewHeadline />
            </button>
            {/* ======== BUTTONS END HERE ============ */}
          </div>
          {/* ======== BUTTONS END HERE ============ */}

          {/* nav links */}
          <div
            className="items-center  justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {NavLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      smooth
                      to={item.link}
                      className="block mr-3 py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
                      aria-current="page"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* nav links */}

          {/* Burger Nav  */}
          <div
            className={
              OpenNav
                ? "lg:hidden w-full  absolute transition ease-in-out delay-150 top-[100px] left-0"
                : "hidden"
            }
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 bg-[#023731]">
              {NavLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() => {
                        setOpenNav(!OpenNav);
                      }}
                      smooth
                      to={item.link}
                      className="block py-4 px-5  text-[#25dac5]"
                      aria-current="page"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Burger Nav  */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
