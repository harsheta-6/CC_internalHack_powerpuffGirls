import React, { useState } from "react";
import Quiz from "./components/mainPrompt";

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
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex items-center justify-center">
      <div className="bg-[#2A2727] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#ECE6C2]">
          Player Setup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-3">
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
                className="w-full px-4 py-2 rounded-lg border-2 border-[#3A3535] bg-[#2A2727] text-[#ECE6C2] focus:border-[#CC6B49] focus:ring focus:ring-[#CC6B49] focus:ring-opacity-50 transition-all outline-none placeholder-[#ECE6C2] placeholder-opacity-50"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-[#6F5643] to-[#CC6B49] text-[#ECE6C2] py-3 px-6 rounded-lg hover:from-[#7F6653] hover:to-[#DC7B59] transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
    </div>
  );
}

export default TwoNameInput;
