import React, { useState } from "react";
import Quiz from "./components/mainPrompt";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
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
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all outline-none"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
    </div>
  );
}

export default ThreeNameInput;
