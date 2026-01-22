import React from "react";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";
import { AnimatedList } from "../components/AnimatedList";

export default function GeneralNormsPage() {
  const navigate = useNavigate();

  const nonTechWords = [
    { text: "General", className: "text-[#ff7ad9]" },
    { text: "Norms", className: "text-[#ff7ad9]" },
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
    <div
      className="min-h-screen relative overflow-hidden text-white"
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Heading */}
        <TypewriterEffectSmooth
          words={nonTechWords}
          className="justify-center"
          cursorClassName="text-[#ff7ad9]"
        />

        <p className="text-purple-200 text-center mb-14">
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
                  border border-purple-700
                  bg-gradient-to-r from-[#1f0b3a] via-[#160728] to-[#0a0118]
                  backdrop-blur-md
                  shadow-[0_0_25px_rgba(168,85,247,0.15)]
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]
                  hover:border-purple-500
                  transition-all duration-300
                  w-[700px] max-w-full mx-auto
                "
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600 text-black font-bold">
                  {idx + 1}
                </div>
                <p className="text-purple-100 text-lg">{rule}</p>
              </div>
            </AnimatedList>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-20 flex justify-center gap-6">
          <button
            onClick={() => navigate("/timeline")}
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
            View Event Timeline
          </button>

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
      </div>
    </div>
  );
}
