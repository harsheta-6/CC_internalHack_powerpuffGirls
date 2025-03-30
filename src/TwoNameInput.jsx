import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Footer from "./footer"

function TwoNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#6F5643" }, // dark brown
    { name: "", color: "#CC6B49" }, // red
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex items-center justify-center ">
      <div>
        <h2 className="text-[70px] font-medium text-center absolute inset-x-0 top-30 h-20 text-[#73BDA8]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-7 absolute inset-x-120 top-80 h-30 tracking-[0.07em] text-[20px]" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-5">
              <div
                className="w-7 h-7 rounded-full "
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
                className="w-full px-4 py-2 rounded-[40px] border-2 border-[#6F5643]  text-[#6F5643] focus:border-[#CC6B49] focus:ring focus:ring-[#CC6B49] focus:ring-opacity-50 transition-all outline-none placeholder-[#6F5643] placeholder-opacity-50"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#73BDA8] text-[#1E1B1B] py-3 px-5 rounded-[30px] hover:from-[#7F6653] hover:to-[#DC7B59] transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default TwoNameInput;
