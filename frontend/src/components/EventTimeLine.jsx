import React from "react";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { useNavigate } from "react-router-dom";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";

export default function EventTimeline() {
  const navigate = useNavigate();

  const timeline = [
    { time: "8:30 – 9:00", event: "Registration" },
    { time: "9:00 – 10:00", event: "Inauguration Ceremony" },
    { time: "10:00 – 12:00", event: "Technical Events" },
    { time: "12:00 – 1:30", event: "Lunch Break" },
    { time: "1:30 – 2:00", event: "Valedictory Ceremony" },
  ];

  const nonTechWords = [
    {
      text: "Event",
      className: "text-[#ec4899] text-4xl page-title sm:text-5xl md:text-6xl",
    },
    {
      text: "TimeLine",
      className: "text-[#ec4899] text-4xl page-title sm:text-5xl md:text-6xl",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden text-white font-sans"
      style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Galaxy
          density={0.8}
          glowIntensity={0.4}
          saturation={0.5}
          hueShift={200}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          starSpeed={0.3}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <TypewriterEffectSmooth
          words={nonTechWords}
          className="justify-center mb-10"
          cursorClassName="text-[#ec4899]"
        />

        {/* Timeline Section */}
        <section className="relative mt-10">
          {/* VIBRANT PURPLE LINE 
              Updated with deep purple shades from your palette
          */}
          <div
            className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 h-full w-[3px] z-0"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, #a855f7 20%, #9333ea 50%, #7e22ce 80%, transparent 100%)"
            }}
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex items-center md:justify-center">
                  
                  {/* ATTRACTIVE PULSING DOT */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    {/* Outer Pulse Glow */}
                    <div className="absolute w-10 h-10 bg-[#a855f7]/30 rounded-full animate-ping" />
                    
                    {/* Main Dot */}
                    <div
                      className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-[#7e22ce] to-[#c084fc]
                      ring-2 ring-white/20 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`relative z-10 w-full max-w-[300px] p-6 rounded-2xl
                      border border-[#581c87] 
                      bg-gradient-to-r from-[#1a0b2e] to-[#0a0118]
                      shadow-[0_0_20px_rgba(147,51,234,0.15)]
                      ml-12 md:ml-0
                      ${
                        isLeft
                          ? "md:-translate-x-[70%] md:pr-4"
                          : "md:translate-x-[70%] md:pl-4"
                      }`}
                  >
                    <p className="text-[#c084fc] font-semibold mb-1 uppercase tracking-wider text-xs sm:text-sm">
                      {item.time}
                    </p>
                    <p className="text-white text-lg md:text-xl font-medium">
                      {item.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Register Button */}
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => navigate("/events")}
            className="
              w-full sm:w-auto relative px-8 py-3 rounded-xl
              bg-black border border-[#a855f7]
              text-white font-semibold
              shadow-[0_0_6px_2px_rgba(168,85,247,0.25)]
              transition-all duration-300 ease-out
              hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.7)]
              hover:border-[#c084fc]
              hover:scale-105 active:scale-95
            "
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}