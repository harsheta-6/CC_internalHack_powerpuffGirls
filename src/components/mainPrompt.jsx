import React, { useState } from "react";
import { Home, User } from "lucide-react";

const baseQuestions = [
  {
    prompt: "What's your favorite color?",
    options: ["Blue", "Red", "Green"],
    type: "mixed",
  },
  {
    prompt: "Choose your preferred season:",
    options: ["Spring", "Summer", "Winter"],
    type: "mixed",
  },
  {
    prompt: "Select your favorite hobby:",
    options: ["Reading", "Gaming", "Sports"],
    type: "mixed",
  },
  {
    prompt: "Pick your dream vacation destination:",
    options: ["Beach", "Mountains", "City"],
    type: "mixed",
  },
  {
    prompt: "What's your ideal weekend activity?",
    options: ["Movies", "Hiking", "Shopping"],
    type: "mixed",
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-800">Waiting for players...</p>
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
            Story Complete!
          </h2>
          <div className="max-h-96 overflow-y-auto mb-6">
            {answers.map((answer, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <p
                  className="text-sm font-medium"
                  style={{
                    color: players.find((p) => p.name === answer.player).color,
                  }}
                >
                  {answer.player}
                </p>
                <p className="text-xs text-gray-500 mb-1">{answer.question}</p>
                <p className="text-gray-800">{answer.answer}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleEnd}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Home size={20} />
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full relative"
        style={{ borderTop: `4px solid ${currentPlayer.color}` }}
      >
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span
              className="text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2"
              style={{
                backgroundColor: `${currentPlayer.color}15`,
                color: currentPlayer.color,
              }}
            >
              <User size={16} />
              {currentPlayer.name}'s Turn
            </span>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1}
            </span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {getCurrentQuestion().prompt}
        </h2>

        <div className="space-y-3">
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter your answer..."
              value={selectedOption}
              onChange={handleCustomInput}
              className="w-full py-3 px-4 rounded-lg border-2 outline-none transition-all duration-200"
              style={{
                borderColor: selectedOption ? currentPlayer.color : "#e5e7eb",
                boxShadow: selectedOption
                  ? `0 0 0 1px ${currentPlayer.color}`
                  : "none",
              }}
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="w-full mt-6 py-3 px-6 rounded-lg transition-colors"
          style={{
            backgroundColor: selectedOption ? currentPlayer.color : "#e5e7eb",
            color: selectedOption ? "white" : "#9ca3af",
            cursor: selectedOption ? "pointer" : "not-allowed",
          }}
        >
          Next
        </button>

        <div className="mt-6 flex gap-2 justify-center">
          {players.map((player, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: player.color }}
              ></div>
              <span
                className="text-xs"
                style={{
                  color:
                    index === currentPlayerIndex ? player.color : "#6b7280",
                  fontWeight: index === currentPlayerIndex ? "600" : "400",
                }}
              >
                {player.name}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleEndStory}
          className="absolute bottom-4 right-4 text-sm px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
        >
          End Story
        </button>
      </div>
    </div>
  );
}

export default Quiz;
