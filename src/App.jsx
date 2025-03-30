import { Link } from "react-router-dom";
import React from "react";


function App() {
  return (
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex flex-col items-center justify-center">
      <h1 className="text-[110px] mb-5 font-bold tracking-[0.06em]" style={{fontFamily: 'Chonburi'}}>campus code</h1>

      

      <div className="flex gap-15 mb-20 text-[30px] font-semibold tracking-[0.07em]" style={{fontFamily:'CENTAUR'}}>
        <Link to="/2player" className="bg-[#73BDA8] px-15 py-7 rounded-[40px]">
          2 Player
        </Link>
        <Link to="/3player" className="bg-[#CC6B49] px-15 py-7 rounded-[40px]">
          3 Player
        </Link>
        <Link to="/4player" className="bg-[#D2A24C] px-15 py-7 rounded-[40px]">
          4 Player
        </Link>
      </div>
    </div>
  );
}

export default App;
