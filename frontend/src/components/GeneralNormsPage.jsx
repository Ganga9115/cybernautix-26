import React from "react";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";
import { AnimatedList } from "../components/AnimatedList";

export default function GeneralNormsPage() {
  const navigate = useNavigate();

  // Updated with larger responsive text sizes: 
  // text-4xl (mobile), sm:text-5xl (tablet), md:text-6xl (desktop)
  const nonTechWords = [
    { 
      text: "General", 
      className: "text-pink-light page-title text-4xl sm:text-5xl md:text-6xl" 
    },
    { 
      text: "Norms", 
      className: "text-pink-light page-title text-4xl sm:text-5xl md:text-6xl" 
    },
  ];

  const rules = [
    "Students must bring their respective college ID card.",
    "Usage of mobile phones inside the campus should be avoided.",
    "Confirmation mail will be sent to your registered email ID.",
    "Participants can come by RMK college bus or by public transport.",
    "Boys must come in formal manner.",
    "Girls should wear formal dress.",
    "No on-spot registration is allowed.",
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-transparent">
      {/* Galaxy Background */}
      {/* <div className="absolute inset-0 z-0 opacity-60">
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
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-28 pt-5 md:pt-24">
        {/* Heading - Now Responsive */}
        <TypewriterEffectSmooth
          words={nonTechWords}
          className="justify-center"
          cursorClassName="text-[#ec4899]"
        />

        <p className="text-[#e9d5ff] text-center mb-14 text-sm md:text-base">
          Please read all instructions carefully before participating.
        </p>

        {/* Rules (ANIMATED) */}
        <div className="space-y-6">
          {rules.map((rule, idx) => (
            <AnimatedList key={idx} delay={idx * 0.08}>
              <div
                className="
                  flex gap-4 p-6
                  rounded-2xl
                  border border-[#581c87]
                  bg-gradient-to-r from-[#1a0b2e] to-[#0a0118]
                  backdrop-blur-md
                  shadow-[0_0_25px_rgba(147,51,234,0.15)]
                  hover:shadow-[0_0_35px_rgba(147,51,234,0.3)]
                  hover:border-[#9333ea]
                  transition-all duration-300
                  w-full max-w-[700px] mx-auto
                "
              >
                {/* Number Circle: shrink-0 prevents squishing on small screens */}
                <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#9333ea] text-black font-bold">
                  {idx + 1}
                </div>
                <p className="text-[#e9d5ff] text-base md:text-lg self-center">
                  {rule}
                </p>
              </div>
            </AnimatedList>
          ))}
        </div>

        {/* Actions - Flex column on mobile, Row on tablet+ */}
        <div className="mt-10 md:mt-15 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => navigate("/timeline")}
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
            View Event Timeline
          </button>

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