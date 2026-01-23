import DotGrid from "./DotGrid/DotGrid";
import rmkIcon from "../assets/rmk.png";
import EncryptedText from "../components/ui/EncryptedText";

const SplashScreen = () => {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B0616]">

      {/* 🔹 DOT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={16}
          baseColor="#1B102A"
          activeColor="#A855F7"
          proximity={100}
          shockRadius={220}
          shockStrength={5}
          resistance={700}
          returnDuration={1.5}
        />
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 text-center space-y-6 sm:space-y-8">

        {/* LOGO */}
        <img
          src={rmkIcon}
          alt="RMK"
          className="
            w-28 
            sm:w-36 
            md:w-44 
            lg:w-56
            drop-shadow-[0_0_12px_rgba(0,255,159,0.5)]
          "
        />

        {/* TITLE */}
        <EncryptedText
          text="WELCOME TO CYBERNAUTIX'26"
          encryptedClassName="
            text-xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-6xl
            font-mono tracking-widest
            text-[#6D28D9]
            leading-tight
          "
          revealedClassName="
            text-xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-6xl
            font-semibold tracking-widest
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#6D28D9]
            drop-shadow-[0_0_25px_#A855F7]
            leading-tight
          "
          revealDelayMs={45}
          pauseAfterReveal={1800}
        />

        {/* SUBTITLE */}
        <p className="text-xs sm:text-sm md:text-lg tracking-widest text-white font-mono opacity-80">
          A NATIONAL LEVEL SYMPOSIUM
        </p>

        {/* LOADING BAR */}
        <div className="w-36 sm:w-44 md:w-56 h-1 bg-[#A855F7]/20 overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#6D28D9] rounded-full"
            style={{
              width: "0%",
              animation: "loading 2s forwards",
            }}
          />
        </div>

        {/* KEYFRAMES */}
        <style>
          {`
            @keyframes loading {
              0% { width: 0%; }
              100% { width: 100%; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default SplashScreen;