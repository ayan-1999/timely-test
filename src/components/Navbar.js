import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const clickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Services" },
    { id: 3, name: "Working Hours" },
    { id: 4, name: "Gallery" },
    { id: 5, name: "About" },
    { id: 6, name: "Testimonials" },
  ];

  return (
    <>
      <nav className="bg-[#ecdedb] h-[76px] lg:h-[90px] flex justify-center items-center sticky top-0 z-50">
        <section className="w-full max-w-[1440px] flex items-center px-6 sm:px-[96px]">
          <div className="flex items-center font-semibold text-[#636363] text-lg flex-none">
            <a href="/">BoB's Beauty Bar</a>
          </div>

          <div className="ml-auto hidden lg:flex items-center">
            <ul className="flex items-center justify-between text-sm">
              {navItems.map((item) => (
                <li key={item.id} className="px-4 text-[#636363]">
                  <a href="/">{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center ml-3">
              <button className="bg-[#cb9eb2] hover:bg-[#784d60] px-4 py-3 rounded-lg text-sm text-[#4f4949] hover:text-white ">
                Book Appointment
              </button>
            </div>
          </div>

          <div className="lg:hidden ml-auto">
            <button className="relative left-2" onClick={clickMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5 text-black" />
              ) : (
                <FaBars className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </section>
      </nav>

      {isMenuOpen ? (
        <div className="lg:hidden w-full bg-[#ecdedb] text-[#636363] py-4">
          <ul className="flex flex-col items-center w-full">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="my-3 cursor-pointer w-full text-center"
              >
                <a href="/">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
