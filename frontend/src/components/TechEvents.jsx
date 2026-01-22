import React from "react";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy"; 
import tedx from "../assets/tedx.png";
import paperpresentation from "../assets/paper-presentation.png";
import hackathon from "../assets/Hackathon.jpeg";
import { useNavigate } from "react-router-dom";
import EncryptedText from '../components/ui/EncryptedText';

const events = [
  {
    title: "HackVerse : Heroes edition",
    image: hackathon,
    description:
      "You don’t need superpowers to be a hero. You just need an idea",
    rules: [
      "All team members must be present during the offline final.",
      "Only one entry per team is allowed.",
      "Inter department teams allowed.",
      "Team size - 1 to 3 members.",
    ],
  },
  {
    title: "Papermania",
    image:paperpresentation,
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
    title: "TEDX",
    image: tedx,
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
    title: "AI Event",
    image: hackathon,
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
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white pt-[4vh]">

      {/* 🌀 Antigravity Background */}
   <div className="absolute inset-0 z-0 w-full h-full opacity-60 pointer-events-none">

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
        border border-cyan-400/40
        text-cyan-300
        hover:bg-cyan-400/10
        hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
        transition-all duration-300
      "
    >
      ← Back
    </button>

    {/* ➡ Non-Tech */}
    <button
      onClick={() => navigate('/non-tech')}
      className="
        flex items-center gap-2
        px-4 py-2 rounded-full
        bg-black/60 backdrop-blur-md
        border border-cyan-400/40
        text-cyan-300
        hover:bg-cyan-400/10
        hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
        transition-all duration-300
      "
    >
      Non-Tech Events
    </button>

  </div>
</div>


      {/* 🌌 Galaxy Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1b2a4e,transparent_40%),radial-gradient(circle_at_80%_80%,#2d0b59,transparent_40%)] opacity-60 z-[1]" />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
       <div className="flex justify-center items-center text-center mt-12">
  <EncryptedText
    text="Technical Events"
    encryptedClassName="
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
      font-normal tracking-wide
      text-[#22d3ee]
      opacity-80
    "
    revealedClassName="
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
      font-bold tracking-wide
      bg-clip-text text-transparent
      bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#0891b2]
    "
    revealDelayMs={40}
    pauseAfterReveal={1800}
  />
</div>



        

        {/* Rewards */}
        <div className="mt-10 flex justify-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-lg text-center">
              🏆 <span className=" text-[#22d3ee] font-semibold">Winner:</span> ₹1,000
              &nbsp; | &nbsp;
              🥈 <span className="text-[#22d3ee] font-semibold">Runner-up:</span> ₹500
            </p>
          </div>
        </div>

        {/* ⚡ Electric Border Event Cards */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">



          {events.map((event, index) => (
            <ElectricBorder
              key={index}
              color="#22d3ee"
              speed={0.8}
              chaos={0.08}
              style={{ borderRadius: 24 }}
            >
              <div
  className="
    bg-black/60
    w-full max-w-xl
    rounded-2xl
    overflow-hidden
    backdrop-blur-xl
    transition-transform duration-500
    hover:scale-[1.02]
  "
>


                
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="
  w-full
  h-64 sm:h-72 md:h-80
  object-cover
  transition-transform duration-500
  hover:scale-105
"

                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold  text-[#22d3ee] mb-3">
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