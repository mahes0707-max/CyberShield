import React, { useState } from "react";
import boy from "../assets/icons/boy.png";
import sunshine from "../assets/icons/sunshine.png";
import titlelogo from "../assets/icons/titlelogo.png";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Training Center", path: "/training-center" },
    { name: "Quiz", path: "/cyberquiz" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Threat Library", path: "/threat-library" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <div className="header flex items-center p-4 w-full border-b bg-[#00030f] text-white">
        <div className="titlelogo w-10 h-10 mx-3 ">
          <img src={titlelogo} alt="Title Logo" />
        </div>
        <h1 className="text-2xl font-bold text-white">CyberShield</h1>
        <div className="hidden md:flex ml-auto space-x-10 items-center">
          <div className="hidden md:flex ml-auto space-x-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-bold text-white hover:text-blue-500 transition"
              >
                {item.name}
              </Link>
            ))}

            <img src={sunshine} className="w-6 h-6 cursor-pointer" />
            <img src={boy} className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <button
          className="md:hidden ml-auto text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMenuOpen(false)}
            ></div>

            <div className="relative w-72 h-screen bg-[#000814] text-white p-6 flex flex-col gap-8 shadow-2xl">
              <button
                className="text-3xl self-end"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex gap-5 mt-auto">
                <img src={sunshine} className="w-6 h-6 cursor-pointer" />
                <img src={boy} className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
