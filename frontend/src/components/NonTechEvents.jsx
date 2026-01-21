import React from "react";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";

const events = [
  {
    title: "Mind Spark",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    description:
      "A fast-paced non-technical quiz event designed to test logical thinking, presence of mind, and general awareness.",
    rules: [
      "Team of 2 members",
      "Multiple elimination rounds",
      "No mobile phones allowed",
      "Judges’ decision is final",
    ],
  },
  {
    title: "Stage Storm",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    description:
      "A high-energy performance event where participants showcase talent through speaking, acting, or entertainment.",
    rules: [
      "Solo or team participation",
      "Time limit: 3–5 minutes",
      "No offensive content",
      "Audience engagement counts",
    ],
  },
];

const NonTechEvents = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* 🌌 Galaxy Animated Background */}
      <div className="absolute inset-0 z-[0] opacity-60">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={0.8}
          glowIntensity={0.4}
          saturation={0.6}
          hueShift={330}
          twinkleIntensity={0.25}
          rotationSpeed={0.04}
          repulsionStrength={1.2}
          starSpeed={0.3}
          speed={0.5}
        />
      </div>

      {/* 🌠 Soft Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3b1d5a,transparent_40%),radial-gradient(circle_at_80%_80%,#0d3b4f,transparent_40%)] opacity-60 z-[1]" />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-wide text-pink-400">
          Non-Technical Events
        </h1>

        <p className="text-center mt-4 text-gray-300">
          Creativity, confidence & charisma in orbit ✨
        </p>

        {/* Rewards */}
        <div className="mt-10 flex justify-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-lg text-center">
              🏆 <span className="text-pink-300 font-semibold">Winner:</span> ₹1,000
              &nbsp; | &nbsp;
              🥈 <span className="text-orange-300 font-semibold">Runner-up:</span> ₹500
            </p>
          </div>
        </div>

        {/* ⚡ Electric Border Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14">
          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#ff7ad9"
              speed={0.8}
              chaos={0.08}
              style={{ borderRadius: 24 }}
            >
              <div className="bg-black/60 rounded-2xl overflow-hidden backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-pink-300 mb-3">
                    {event.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-5">
                    <h3 className="text-sm uppercase tracking-widest text-orange-400 mb-2">
                      Rules
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                      {event.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4">
                    <button className="w-full border border-green-400/40 text-green-400 py-2 px-4 rounded-lg hover:bg-green-400/10 transition">
                      WhatsApp Group
                    </button>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
                      Register Now →
                    </button>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonTechEvents;