import { Link } from "react-router-dom";
import React from "react";
import Ellipse1 from "./assets/Ellipse-1.png";
import Ellipse2 from "./assets/Ellipse-2.png";
import Ellipse3 from "./assets/Ellipse-3.png";
import Footer from "./footer";
import Star from "./assets/Vector.png";

function App() {
  return (
    <div className="bg-[#1E1B1B] min-h-screen w-full text-[#ECE6C2] flex flex-col items-center justify-center relative px-4 sm:px-8 overflow-hidden">
      <h1
        className="text-5xl sm:text-6xl md:text-8xl lg:text-[105px] mb-5 sm:mb-8 font-bold tracking-[0.06em] text-center z-10 flex items-center justify-center"
        style={{ fontFamily: "Chonburi" }}
      >
        <span>campus c</span>
        <img 
          src={Star}
          className="w-15 sm:w-20 md:w-20 lg:w-30 inline-block relative top-1 sm:top-1"
          alt=""
        />
        <span>de</span>
      </h1>

      <img 
        src={Ellipse1} 
        className="absolute top-0 left-0 w-1/2 sm:w-auto opacity-80"
        alt=""
      />
      <img 
        src={Ellipse2}
        className="absolute top-0 left-0 w-1/2 sm:w-auto opacity-80"
        alt=""
      />
      <img 
        src={Ellipse3}
        className="absolute right-0 bottom-10 w-1/2 sm:w-auto opacity-80"
        alt=""
      />

      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-15 z-10 mb-10 sm:mb-20"
        style={{ fontFamily: "CENTAUR" }}
      >
        <Link 
          to="/2player" 
          className="bg-[#73BDA8] px-8 sm:px-10 md:px-15 py-4 sm:py-5 md:py-7 rounded-[40px] text-lg sm:text-xl md:text-[30px] font-semibold tracking-[0.07em] text-center hover:opacity-90 transition-opacity"
        >
          2 Player
        </Link>
        <Link 
          to="/3player" 
          className="bg-[#CC6B49] px-8 sm:px-10 md:px-15 py-4 sm:py-5 md:py-7 rounded-[40px] text-lg sm:text-xl md:text-[30px] font-semibold tracking-[0.07em] text-center hover:opacity-90 transition-opacity"
        >
          3 Player
        </Link>
        <Link 
          to="/4player" 
          className="bg-[#D2A24C] px-8 sm:px-10 md:px-15 py-4 sm:py-5 md:py-7 rounded-[40px] text-lg sm:text-xl md:text-[30px] font-semibold tracking-[0.07em] text-center hover:opacity-90 transition-opacity"
        >
          4 Player
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;