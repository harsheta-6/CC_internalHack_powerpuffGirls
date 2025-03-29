import React, { useState } from "react";
import { Home, User } from "lucide-react";

const questions = [
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
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [selectedOption, setSelectedOption] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const currentPlayer = players[currentPlayerIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleCustomInput = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedOption;
      setAnswers(newAnswers);
      setSelectedOption("");

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      } else {
        setIsCompleted(true);
      }
    }
  };

  const handleEnd = () => {
    window.location.href = "/";
  };

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">
            Quiz Completed!
          </h2>
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
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
        style={{ borderTop: `4px solid ${currentPlayer.color}` }}
      >
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
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
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                backgroundColor: currentPlayer.color,
              }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {questions[currentQuestion].prompt}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`w-full py-3 px-4 rounded-lg border-2 transition-all duration-200`}
              style={{
                borderColor:
                  selectedOption === option ? currentPlayer.color : "#e5e7eb",
                backgroundColor:
                  selectedOption === option
                    ? `${currentPlayer.color}15`
                    : "white",
                color:
                  selectedOption === option ? currentPlayer.color : "#1f2937",
              }}
            >
              {option}
            </button>
          ))}

          <div className="mt-4">
            <input
              type="text"
              placeholder="Or enter your own answer..."
              value={
                selectedOption === "" ||
                questions[currentQuestion].options.includes(selectedOption)
                  ? ""
                  : selectedOption
              }
              onChange={handleCustomInput}
              className="w-full py-3 px-4 rounded-lg border-2 outline-none transition-all duration-200"
              style={{
                borderColor:
                  !questions[currentQuestion].options.includes(
                    selectedOption
                  ) && selectedOption
                    ? currentPlayer.color
                    : "#e5e7eb",
                boxShadow:
                  !questions[currentQuestion].options.includes(
                    selectedOption
                  ) && selectedOption
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
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
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
      </div>
    </div>
  );
}

export default Quiz;
