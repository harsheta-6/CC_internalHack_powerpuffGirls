import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Mess from "./assets/Vector-3.png"
import Footer from "./footer"


function ThreeNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#ECE6CE" }, // off white
    { name: "", color: "#73BDA8" }, // blue
    { name: "", color: "#D2A24C" }, // yellow
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    <div className=" flex items-center justify-center min-h-screen bg-[#1E1B1B]">
      <div>
        <h2 className="text-[80px] font-medium text-center absolute inset-x-0 top-20 h-20 text-[#CC6B4A]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>

        <img src={Mess} 
        className="absolute inset-0 "/>

        <form onSubmit={handleSubmit} className="space-y-6" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-6 tracking-[0.07em] text-[20px]">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: player.color }}
              />
              <input
                type="text"
                value={player.name}
                onChange={(e) => {
                  const newPlayers = [...players];
                  newPlayers[index].name = e.target.value;
                  setPlayers(newPlayers);
                }}
                placeholder={`Player ${index + 1}`}
                required
                className="w-full px-30 py-2 rounded-[40px] border-2 border-[#CC6B4A]  focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-6 bg-[#CC6B4A] tracking-[0.06em] text-white py-3 px-6 rounded-[40px] hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ThreeNameInput;
