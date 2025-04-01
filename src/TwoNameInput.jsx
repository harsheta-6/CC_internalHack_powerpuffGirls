import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Footer from "./footer"
import Line1 from "./assets/Vector-1.png"
import Line2 from "./assets/Vector-2.png"
import burstBrown from "./assets/Burst-pucker-1.png"
import burstRed from "./assets/Burst-pucker-2.png"

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
    <div className="bg-[#1E1B1B] min-h-screen w-full text-[#ECE6C2] flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="relative flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
          <img 
            src={Line1}
            className="w-1/4 sm:w-1/3 hidden sm:block"
            alt=""
          />
          <h2 
            className="text-3xl sm:text-5xl md:text-[70px] font-medium text-center text-[#73BDA8] mx-4 sm:mx-8"
            style={{fontFamily: 'Adamina-Regular'}}
          >
            Player Setup
          </h2>
          <img 
            src={Line2}
            className="w-1/4 sm:w-1/3 hidden sm:block"
            alt=""
          />
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6 relative"
          style={{fontFamily: 'CENTAUR'}}
        >
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-4 sm:space-x-6 relative">
              <div className="">
                {index === 0 && (
                  <img 
                    src={burstBrown}
                    className="absolute -left-5 -top-1 w-13 sm:w-20 md:w-20 sm:-left-8"
                    alt=""
                  />
                )}
                {index === 1 && (
                  <img 
                    src={burstRed}
                    className="absolute -left-5 -top-1 w-13 sm:w-20 md:w-20 sm:-left-8"
                    alt=""
                  />
                )}
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: player.color }}
                />
              </div>
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
                className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-[40px] border-2 bg-transparent 
                          focus:border-[#ECE6C2] focus:ring focus:ring-[#ECE6C2] focus:ring-opacity-50 
                          transition-all outline-none tracking-[0.2em] sm:tracking-[0.3em] 
                          text-base sm:text-lg md:text-[22px] placeholder-[#ECE6C2] placeholder-opacity-20"
                style={{ borderColor: player.color }}
              />
            </div>
          ))}
          
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              type="submit"
              className="bg-[#73BDA8] tracking-[0.2em] sm:tracking-[0.3em] text-[#1E1B1B] 
                       py-2 sm:py-3 px-8 sm:px-16 md:px-30 rounded-[30px] 
                       hover:opacity-90 transition-all duration-200 
                       text-base sm:text-lg md:text-[22px] font-semibold"
            >
              We're Ready!
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default TwoNameInput;