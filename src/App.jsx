import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">site-name</h1>

      <div className="flex flex-col gap-4">
        <Link to="/2player" className="bg-blue-500 px-4 py-2 rounded">
          2 Player
        </Link>
        <Link to="/3player" className="bg-green-500 px-4 py-2 rounded">
          3 Player
        </Link>
        <Link to="/4player" className="bg-red-500 px-4 py-2 rounded">
          4 Player
        </Link>
      </div>
    </div>
  );
}

export default App;
