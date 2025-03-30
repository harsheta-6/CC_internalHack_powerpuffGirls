import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Star1 from "./assets/Star-1.png"
import Star2 from "./assets/Star-2.png"
import Footer from "./footer"

function FourNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#6F5643" }, // dark brown
    { name: "", color: "#CC6B49" }, // red
    { name: "", color: "#ECE6C2" }, // off white
    { name: "", color: "#73BDA8" }, // blue
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1B1B]">
      <div>
        <h2 className="text-[70px] font-medium text-center absolute inset-x-0 top-20 h-20 text-[#D2A24C]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>

        <img src={Star1}
        className="absolute top-0 right-0"/>

        <img src={Star2}
        className="absolute bottom-0 left-0"/>

        <form onSubmit={handleSubmit} className="space-y-8 absolute inset-x-125 top-65 h-30 tracking-[0.1em] text-[22px]" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full flex-shrink-0"
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
                className="w-full px-35 py-2 rounded-[40px] border-2 border-[#D2A24C] text-[#D2A24C] focus:border-[#ECE6C2] focus:ring focus:ring-[#ECE6C2] focus:ring-opacity-50 transition-all outline-none placeholder-[#ECE6C2] tracking-[0.3em] placeholder-opacity-20"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#D2A24C] tracking-[0.3em] text-[#1E1B1B] py-3 px-5 rounded-[30px] hover:from-[#D2A24C] hover:to-[#DC7B59] transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FourNameInput;
