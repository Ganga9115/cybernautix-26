import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import aiBg2 from "../assets/aiBg2.png";

export default function HomePage() {
  const navigate = useNavigate();

  /* ================= COUNTDOWN ================= */
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  /* ================= TYPING EFFECT ================= */
  const fullText = "CYBERNAUTIX'26";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 2000 / fullText.length;
    const deletingSpeed = 50;

    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          const next = fullText.slice(0, prev.length + 1);
          if (next === fullText) {
            setTimeout(() => setIsDeleting(true), 800);
          }
          return next;
        } else {
          const next = prev.slice(0, -1);
          if (next === "") setIsDeleting(false);
          return next;
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}
    >
      {/* ================= GALAXY BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
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
          starSpeed={0.3}
          speed={0.5}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="
        relative z-10
        flex flex-col md:flex-row
        items-center justify-between
        min-h-screen
        px-6 md:px-16
        pt-24 md:pt-0
        overflow-x-hidden
      ">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full md:w-1/2 text-center">

          {/* COLLEGE INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="
              max-w-full px-2
              text-base sm:text-lg md:text-3xl
              text-white/90
              tracking-wider
              break-words leading-snug
              head-title
            ">
              R.M.K. ENGINEERING COLLEGE
            </h1>

            <h2 className="
              max-w-full px-3
              text-sm sm:text-base md:text-xl
              text-white/80
              mt-2
              break-words leading-relaxed
              dept-title
            ">
              DEPARTMENT OF INFORMATION TECHNOLOGY
            </h2>

            <p className="text-sm text-white/90 mt-2">
              Presents
            </p>
          </motion.div>

          {/* EVENT TITLE */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              relative z-20
              mt-6 mb-10
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-mono tracking-widest
              text-pink-500
              drop-shadow-[0_0_45px_#ec4899]
              cyber-title
            "
          >
            {displayText}
            <span className="ml-1 text-pink-400 animate-pulse" />
          </motion.h1>

          {/* REGISTER BUTTON */}
          <div className="flex justify-center mt-6">
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

          {/* COUNTDOWN CLOCK */}
          <div className="flex justify-center mt-12">
            <div className="
              inline-flex items-center
              gap-2 md:gap-3
              px-4 py-3
              rounded-2xl
              bg-white/0 backdrop-blur-2xl
              border border-white/15
              shadow-[0_12px_32px_rgba(0,0,0,0.6)]
            ">
              {Object.entries(timeLeft).map(([label, value], idx, arr) => (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center w-[56px] md:w-[72px]">
                    <div className="
                      text-2xl md:text-4xl
                      time-title font-black tracking-tighter
                      text-white leading-none
                      drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
                    ">
                      {String(value).padStart(2, "0")}
                    </div>

                    <div className="
                      mt-2
                      text-[10px] md:text-xs
                      font-semibold uppercase
                      tracking-wider
                      text-white/80
                    ">
                      {label}
                    </div>
                  </div>

                  {idx !== arr.length - 1 && (
                    <div className="text-2xl md:text-3xl font-bold text-white/90 pb-4">
                      :
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="
            w-full md:w-1/2
            flex justify-end
            mt-20 md:mt-0
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
