import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import aiBg2 from "../assets/aiBg2.png";

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

  const fullText = "CYBERNAUTIX'26";
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const typingSpeed = 2000 / fullText.length; // completes in 2 seconds
  const deletingSpeed = 50;

  const interval = setInterval(() => {
    setDisplayText((prev) => {
      if (!isDeleting) {
        // Typing
        const next = fullText.slice(0, prev.length + 1);
        if (next === fullText) {
          setTimeout(() => setIsDeleting(true), 800); // pause after typing
        }
        return next;
      } else {
        // Deleting
        const next = prev.slice(0, -1);
        if (next === "") {
          setIsDeleting(false);
        }
        return next;
      }
    });
  }, isDeleting ? deletingSpeed : typingSpeed);

  return () => clearInterval(interval);
}, [isDeleting]);


  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}
    >
      {/* Galaxy Background */}
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-16">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-left">
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3 }}
  className="text-center md:text-center mb-6"
>
  <h1 className="text-xl md:text-2xl text-white/90 tracking-wider">
    R.M.K. ENGINEERING COLLEGE
  </h1>

  <h2 className="text-base md:text-lg text-white/70 mt-1">
    DEPARTMENT OF INFORMATION TECHNOLOGY
  </h2>

  <p className="text-sm md:text-base text-white/50 italic mt-1">
    Presents
  </p>
</motion.div>


<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="
    relative z-20 mb-8
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl
    font-mono tracking-widest
    text-pink-500
    drop-shadow-[0_0_45px_#ec4899]
  "
>
  {displayText}
  <span className="ml-1 text-pink-400 animate-pulse"></span>
</motion.h1>


          {/* Register Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/events")}
              className="
                relative px-8 py-3 rounded-xl
                bg-black
                border border-purple-500
                text-white font-semibold
                shadow-[0_0_6px_2px_rgba(168,85,247,0.25)]
                transition-all duration-300 ease-out
                hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.95)]
                hover:border-purple-400
              "
            >
              REGISTER NOW
            </button>
          </div>

          {/* Countdown */}
         <div className="grid grid-cols-4 gap-2 mt-5">
           {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl font-mono text-white/80">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest text-white/50">
                  {label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="
            w-full md:w-1/2
            flex justify-center
            mt-12 md:mt-0
            md:translate-x-12
          "
        >
          <img
            src={aiBg2}
            alt="Cyber Illustration"
            className="
              w-[90%] max-w-lg
              drop-shadow-[0_0_60px_#00d1ff]
              animate-float
            "
          />
        </motion.div>
      </div>
    </div>
  );
}
