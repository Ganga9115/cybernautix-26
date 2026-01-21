import React from "react";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import nontechimg from "../assets/nontech-2.png";
import { useNavigate } from "react-router-dom";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";

const events = [
  {
    title: "Mind Spark",
    image: nontechimg,
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
    image: nontechimg,
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

const nonTechWords = [
  {
    text: "Non",
    className: "text-[#ff7ad9]",
  },
  {
    text: "Technical",
    className: "text-[#ff7ad9]",
  },
  {
    text: "Events",
    className: "text-[#ff7ad9]",
  },
];



const NonTechEvents = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white pt-[4vh]">

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
{/* 🔝 Top Navigation */}
<div className="fixed top-0 left-0 right-0 z-20 pointer-events-auto">
  <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-between items-center">

    {/* ⬅ Back */}
    <button
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-black/60 backdrop-blur-md
        border border-pink-400/40
        text-pink-300
        hover:bg-pink-400/10
        hover:shadow-[0_0_20px_rgba(255,122,217,0.5)]
        transition-all duration-300
      "
    >
      ← Back
    </button>

    {/* ➡ Tech */}
    <button
      onClick={() => navigate('/tech')}
      className="
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-black/60 backdrop-blur-md
       border border-pink-400/40
        text-pink-300
        hover:bg-pink-400/10
        hover:shadow-[0_0_20px_rgba(255,122,217,0.5)]
        transition-all duration-300
      "
    >
      Tech Events
    </button>

  </div>
</div>

      {/* 🌠 Soft Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#3b1d5a,transparent_40%),radial-gradient(circle_at_80%_80%,#0d3b4f,transparent_40%)] opacity-60 z-[1]" />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
       <div className="flex flex-col items-center justify-center mt-10">
 

 <TypewriterEffectSmooth
  words={nonTechWords}
  className="justify-center"
  cursorClassName="text-[#ff7ad9]"
/>



</div>

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
       <div className="mt-20 grid grid-cols-1 gap-14 place-items-center">

          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#ff7ad9"
              speed={0.8}
              chaos={0.08}
              style={{ borderRadius: 24 }}
            >
             <div className="
  bg-black/60
  w-[50vw] h-[120vh] 
  rounded-2xl
  overflow-hidden
  backdrop-blur-xl
  transition-transform duration-500
  hover:scale-[1.02]
">


                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-[50vw] h-[65vh]  object-cover transition-transform duration-500 hover:scale-105"
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