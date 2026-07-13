import React, { useState } from "react";
import boy from "../assets/icons/boy.png";
import titlelogo from "../assets/icons/titlelogo.png";
import "../index.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {

  try {

    await logout();

    navigate("/");

  }

  catch (err) {

    console.log(err);

  }

};
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
                className={`font-bold transition

                        ${
                        location.pathname === item.path

                        ?

                        "text-cyan-400"

                        :

                        "text-white hover:text-cyan-400"

                        }`}
              >
                {item.name}
              </Link>
            ))}

            {currentUser ? (

              <>

                <div className="flex items-center gap-3">

                  <img
                    src={boy}
                    className="w-8 h-8 rounded-full"
                  />

                  <span className="font-semibold text-cyan-400">

                    {currentUser.displayName}

                  </span>

                </div>

                <button

                  onClick={handleLogout}

                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"

                >

                  Logout

                </button>

              </>

            ) : (

              <button

                onClick={() => navigate("/login")}

                className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg"

              >

                Login

              </button>

            )}
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

              <div className="mt-auto">

                        {currentUser ? (

                          <>

                            <div className="flex items-center gap-3 mb-5">

                              <img
                                src={boy}
                                className="w-10 h-10 rounded-full"
                              />

                              <span className="text-cyan-400 font-bold">

                                {currentUser.displayName}

                              </span>

                            </div>

                            <button

                              onClick={handleLogout}

                              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl"

                            >

                              Logout

                            </button>

                          </>

                        ) : (

                          <button

                            onClick={() => navigate("/login")}

                            className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-xl"

                          >

                            Login

                          </button>

                        )}

                      </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
