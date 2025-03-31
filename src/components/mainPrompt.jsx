import React, { useState } from "react";
import { Home, User } from "lucide-react";

const baseQuestions = [
  {
    prompt: "civil or chemical",
  },
  {
    prompt: "would you rather run into a brick or would u rather not",
  },
  {
    prompt: "yes",
  },
  {
    prompt: "no",
  },
  {
    prompt: "no",
  },
];

function Quiz({ players }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // Add safety check for players prop
  if (!players || players.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[##1E1B1B]">
        <div>
          <p className="text-white">Waiting for players...</p>
        </div>
      </div>
    );
  }

  const currentPlayer = players[currentPlayerIndex];

  const getCurrentQuestion = () => {
    return baseQuestions[currentQuestion % baseQuestions.length];
  };

  const handleCustomInput = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      setAnswers([
        ...answers,
        {
          player: currentPlayer.name,
          question: getCurrentQuestion().prompt,
          answer: selectedOption,
        },
      ]);
      setSelectedOption("");
      setCurrentQuestion(currentQuestion + 1);
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    }
  };

  const handleEndStory = () => {
    setIsCompleted(true);
  };

  const handleEnd = () => {
    window.location.href = "/";
  };

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1E1B1B]">
        <div className="bg-[#1E1B1B] p-8 rounded-[50px] max-w-md w-full">
          <button
            onClick={handleEnd}
            className="absolute left-175 flex items-center text-[22px] justify-center gap-2 bg-white opacity-30 text-black py-4 tracking-[0.07em] px-7 rounded-[40px] hover:bg-white transition-colors" style={{fontFamily:'Adamina-Regular'}}
          >
            Build a New Story
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center text-[22px] justify-center min-h-screen bg-[#1E1B1B]" style={{fontFamily:'CENTAUR'}}>
      <div      >
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">

          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {getCurrentQuestion().prompt}
        </h2>

        <div className="space-y-3">
          <div className="mt-4">
            <input
              type="text"
              placeholder="What will you do?"
              value={selectedOption}
              onChange={handleCustomInput}
              className="w-full py-4 px-30 rounded-[40px] border-2 outline-none transition-all duration-200"style={{
                color: currentPlayer.color}}

            />
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="w-full mt-6 py-3 px-6 rounded-[40px] transition-colors"
          style={{
            backgroundColor: selectedOption ? currentPlayer.color : "#6F5643",
            color: selectedOption ? "": "white",
            cursor: selectedOption ? "pointer" : "not-allowed",
          }}
        >
          Generate
        </button>

        <div className="mt-6 flex gap-2 justify-center">
          {players.map((player, index) => (
            <div key={index} className="flex items-center gap-1">
            </div>
          ))}
        </div>

        <button
          onClick={handleEndStory}
          className="absolute bottom-7 right-10 text-sm px-4 py-2 rounded-[40px] bg-white bg-opacity-30 hover:bg-gray-200 transition-colors text-gray-700"
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
