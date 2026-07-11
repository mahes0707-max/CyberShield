import React from "react";
import mask from "../images/mask.png";
import simulation from "../icons/simulation.png";
import frame from "../icons/frame.png";
import medal from "../icons/medal.png";
import person from "../icons/person.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <Navbar />

      <div className="content flex items-center justify-between p-20 pb-5 pt-5">
        <div className="text-content  gap-5 flex flex-col">
          <h1 className=" stay text-1xl font-bold text-blue-200">
            STAY SAFE. STAY AWARE
          </h1>
          <h1 className="text-5xl font-bold text-white">CyberShield</h1>
          <h3 className=" cyber text-4xl font-bold text-blue-700">
            Cyber Security Awareness Simulator
          </h3>
          <p className="text-lg text-gray-300">
            Learn.Simulate.Protect.Enhance your Cyber security skills through
            real-world simulations and interactive challenges.
          </p>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded w-1/2 mt-4 hover:bg-blue-500"
            onClick={() => navigate("/training-center")}
          >
            Start Learning
          </button>
        </div>
        <div className="mask mt-10 mr-10 ">
          <img
            src={mask}
            alt="Mask"
            className="mask hidden md:block w-[65%] justify-self-center "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around p-7 rounded-lg mx-5 md:mx-20 lg:mx-30 gap-5 h-auto">
        <div className="w-full md:w-1/2 lg:w-1/4 border-3 p-5 rounded-lg bg-gray-900">
          <h5 className="text-3xl font-bold text-green-400">10+</h5>
          <p className="text-white">Simulations</p>
          <img
            src={simulation}
            alt="Simulation Icon"
            className="w-8 h-8  simulation"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 border-3  p-5 rounded-lg bg-gray-900 ">
          <h5 className="text-3xl font-bold text-purple-500">25+</h5>
          <p className="text-white">Challenges</p>
          <img
            src={frame}
            alt="Simulation Icon"
            className="w-8 h-8  simulation"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 border-3  p-5 rounded-lg bg-gray-900">
          <h5 className="text-3xl font-bold text-yellow-400">15+</h5>
          <p className="text-white">Badges</p>
          <img
            src={medal}
            alt="Simulation Icon"
            className="w-8 h-8  simulation"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 border-3  p-5 rounded-lg bg-gray-900">
          <h5 className="text-3xl font-bold text-blue-300">0+</h5>
          <p className="text-white">Users Trained</p>
          <img
            src={person}
            alt="Simulation Icon"
            className="w-8 h-8  simulation"
          />
        </div>
      </div>

      <div className="footer p-5  text-center text-cyan-400">
        <p>
          Cybersecurity is not a product, but a process | Awareness is the first
          line of defense | Stay Secure. Stay Smart
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
