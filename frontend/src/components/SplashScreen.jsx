import DotGrid from './DotGrid/DotGrid';
import rmkIcon from '../assets/rmk.png';
import EncryptedText from '../components/ui/EncryptedText';
const SplashScreen = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0B0616]">

      {/* 🔹 DOT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={18}
          baseColor="#1B102A" 
          activeColor="#A855F7"
          proximity={120}
          shockRadius={250}
          shockStrength={6}
          resistance={700}
          returnDuration={1.5}
        />
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">

        <img
          src={rmkIcon}
          alt="RMK"
          className="w-40 md:w-56 drop-shadow-[0_0_12px_rgba(0,255,159,0.5)]"
        />

       <EncryptedText
  text="WELCOME TO CYBERNAUTIX'26"
  encryptedClassName="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    font-mono tracking-widest
    text-[#6D28D9]
  "
  revealedClassName="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    font-semibold tracking-widest
    bg-clip-text text-transparent
    bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#6D28D9]
    drop-shadow-[0_0_25px_#A855F7]
  "
  revealDelayMs={45}
  pauseAfterReveal={1800}
/>



        <p className="text-lg tracking-widest text-white font-mono">
          A NATIONAL LEVEL SYMPOSIUM
        </p>

       {/* Loading bar */}
<div className="w-48 h-1 bg-[#A855F7]/20 overflow-hidden rounded-full">
  <div
    className="h-full bg-gradient-to-r from-[#E879F9] via-[#A855F7] to-[#6D28D9] rounded-full"
    style={{
      width: "0%",
      animation: "loading 2s forwards"
    }}
  />
</div>

{/* Add this inside your global CSS or tailwind.css */}
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
