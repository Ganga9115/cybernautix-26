import React from "react";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/GalaxyAnimation/Galaxy";

export default function GeneralNormsPage() {
  const navigate = useNavigate();

  const rules = [
    "Students must bring their respective college ID card.",
    "Usage of mobile phones inside the campus should be avoided.",
    "Confirmation mail will be sent to your registered email ID.",
    "Participants must use only the college bus provided.",
    "Boys must come in formal with clean shave.",
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
        <div className="flex justify-center mb-10">
          <div className="px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40">
            <h2 className="text-4xl font-bold text-pink-400">
              General Norms 📝
            </h2>
          </div>
        </div>

        <p className="text-purple-200 text-center mb-14">
          Please read all instructions carefully before participating.
        </p>

        {/* Rules */}
        <div className="space-y-6">
          {rules.map((rule, idx) => (
            <div
              key={idx}
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
          ))}
        </div>

        {/* Actions */}
        <div className="mt-20 flex justify-center gap-6">
          <button
            onClick={() => navigate("/timeline")}
            className="
              px-10 py-3
              rounded-xl
              font-semibold
              text-purple-200
              bg-purple-500/10
              border border-purple-500/40
              backdrop-blur-md
              hover:bg-purple-500/20
              hover:border-purple-400
              transition-all
            "
          >
            View Event Timeline
          </button>

          <button
            className="
              px-10 py-3
              rounded-xl
              font-semibold
              text-white
              bg-[#1a0b2e]
              border border-purple-700
              hover:bg-[#2a0f4a]
              transition
            "
          >
            Register Now ✒️
          </button>
        </div>
      </div>
    </div>
  );
}
