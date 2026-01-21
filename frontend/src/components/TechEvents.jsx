import React from "react";
import TechAntigravityBackground from "./Antigravity/TechAntigravityBackground";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Magnet from "./Magnet/Magnet";
import Galaxy from "../components/GalaxyAnimation/Galaxy"; 

const events = [
  {
    title: "InnovateX",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "An on-the-spot problem-solving challenge where participants design innovative and feasible solutions and present them to a jury.",
    rules: [
      "Individual or team of up to 3 members",
      "1.5 hours to prepare solution",
      "Presentation time: 4–5 minutes",
      "Judging based on innovation & feasibility",
    ],
  },
  {
    title: "Code Nova",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "A competitive coding contest testing logic, problem-solving skills, and algorithmic thinking under time pressure.",
    rules: [
      "Solo participation",
      "Languages: C, C++, Java, Python",
      "Internet access restricted",
      "Top scorers win",
    ],
  },
  {
    title: "Tech Orbit",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description:
      "A technical quiz covering computer science, emerging technologies, and real-world applications.",
    rules: [
      "Team of 2 members",
      "Multiple rounds",
      "No external help",
      "Decision of judges is final",
    ],
  },
  {
    title: "Design Galaxy",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "A creative UI/UX and poster design event focused on aesthetics, usability, and originality.",
    rules: [
      "Solo or duo participation",
      "Tools: Figma / Canva",
      "Theme revealed on spot",
      "Creativity matters most",
    ],
  },
];

const TechEvents = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">

      {/* 🌀 Antigravity Background */}
   <div className="absolute inset-0 z-5 w-full h-full opacity-60">
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

      {/* 🌌 Galaxy Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1b2a4e,transparent_40%),radial-gradient(circle_at_80%_80%,#2d0b59,transparent_40%)] opacity-60 z-[1]" />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold tracking-wide text-[#FF9FFC]">
          Technical Events
        </h1>

        <p className="text-center mt-4 text-gray-300">
          Compete across galaxies of innovation 🌌
        </p>

        {/* Rewards */}
        <div className="mt-10 flex justify-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-lg text-center">
              🏆 <span className=" text-[#FF9FFC] font-semibold">Winner:</span> ₹1,000
              &nbsp; | &nbsp;
              🥈 <span className="text-purple-300 font-semibold">Runner-up:</span> ₹500
            </p>
          </div>
        </div>

        {/* ⚡ Electric Border Event Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14">
          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#FF9FFC"
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
                  <h2 className="text-2xl font-bold  text-[#FF9FFC] mb-3">
                    {event.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-5">
                    <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-2">
                      Rules
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                      {event.rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex gap-4">
  
    <button className="w-full border border-green-400/40 text-green-400 py-2 px-4 rounded-lg hover:bg-green-400/10 transition">
      WhatsApp Group
    </button>
  

  
    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition">
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

export default TechEvents;
