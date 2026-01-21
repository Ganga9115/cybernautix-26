import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Galaxy from "../components/GalaxyAnimation/Galaxy"; 
import aiBg from "../assets/aiBg.png";
export default function HomePage() {
  const navigate = useNavigate();
  
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const targetDate = new Date("2026-02-09T00:00:00+05:30");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden "
    style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}>
       
        {/* AI Background Image */}
    <div
      className="absolute inset-0 z-[1]"
      style={{
        backgroundImage: `url(${aiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.25, // adjust this 👈
      }}
    />

      {/* Galaxy Animation Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={0.8}
          glowIntensity={0.4}
          saturation={0.5}
          hueShift={200}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-lg text-white/80 tracking-wider">
            R.M.K. ENGINEERING COLLEGE
          </h1>
          <h2 className="text-sm text-white/60">
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </h2>
          <p className="text-xs text-white/40 italic">Presents</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            font-mono tracking-widest
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#ff0000] via-[#00d1ff] to-[#a855f7]
            drop-shadow-[0_0_35px_#00d1ff]
          "
        >
          CYBERNAUTIX'26
        </motion.h1>

        <div className="flex gap-6 mt-10 flex-wrap justify-center">
          <button
            onClick={() => navigate("/events")}
            className="
              px-8 py-3 font-mono tracking-wider
              border-2 border-[#00d1ff]
              text-[#00d1ff]
              hover:bg-[#00d1ff]/10
              transition-all
              shadow-[0_0_20px_#00d1ff]
            "
          >
            REGISTER NOW
          </button>

          <button
            onClick={() => navigate("/rules")}
            className="
              px-8 py-3 font-mono tracking-wider
              border-2 border-[#ff0000]
              text-[#ff6b6b]
              hover:bg-[#ff0000]/10
              transition-all
            "
          >
            GENERAL NORMS
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label}>
              <div className="text-4xl md:text-6xl font-mono text-white/80">
                {value}
              </div>
              <div className="text-xs tracking-widest text-white/50">
                {label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
