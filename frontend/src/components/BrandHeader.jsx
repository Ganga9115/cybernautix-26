import React from "react";
import rmkLogo from "../assets/rmk.webp";
import cy from "../assets/CY.png";

const BrandHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-2 bg-black/40 border-b border-white/5">
      <div className="max-w-[97vw] mx-auto ">
        {/* Only visible on Large (Laptop) screens and above */}
        <div className="hidden lg:flex justify-between items-center py-3 ">
          {/* LEFT: RMK LOGO */}
          <div className="flex items-center">
            <img 
              src={rmkLogo} 
              alt="RMK Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>

          {/* RIGHT: BRANDING */}
          <div className="flex items-center">
            <img 
              src={cy} 
              alt="Cybernautix Logo" 
              className="h-12 w-auto object-contain" 
            />
            <h1 className="text-2xl font-black tracking-tighter text-[#22d3ee] uppercase ">
              CYBERNAUTIX-26
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;