import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";

// Animation Wrapper
const AnimatedItem = ({ children, delay = 0 }) => (
  <div 
    className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

import nontech1img from "../assets/HawkinsDimension.webp";
import nontech2img from "../assets/PhantomX.webp";

const events = [
  {
    title: "Hawkins Dimension : Decode from Doodles",
    image: nontech1img,
    description: "A fast-paced three-round drawing and guessing challenge that tests creativity, teamwork, and quick thinking.",
    rules: [
      "Team of 2 members",
      "Three rounds conducted",
      "Ideas expressed only through drawings",
      "Letters, numbers & symbols prohibited",
    ],
    whatsappLink: "https://chat.whatsapp.com/YOUR_LINK_1",
    registerLink: "https://forms.gle/YOUR_FORM_1",
  },
  {
    title: "Phantom X",
    image: nontech2img,
    description: "A Halloween-themed innovation symposium fusing creativity with mystery and spooky fun.",
    rules: [
      "Four rounds including Auction Round",
      "Top teams qualify based on time",
      "Team size: 2–3 members",
      "All teams must play every round",
    ],
    whatsappLink: "https://chat.whatsapp.com/EPcxuxfa85wCCBjFre2b8z",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScPZm3D6jl_9QQi3OIXYfihzgLsVpLdICznA0HkziC_wAMBzA/viewform?usp=sharing&ouid=110837675426105465754",
  },
];

const notes = [
  "Event coordinators’ details are available on the Contact page.",
  "A detailed event description and complete rules will be provided in the Google Form.",
];

/* =======================
    EVENT CARD COMPONENT (WITH FLIP)
======================= */
const EventCard = ({ event, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <ElectricBorder
      color="#E50914"
      speed={0.8}
      chaos={0.08}
      style={{ borderRadius: 24 }}
    >
      {/* MOBILE VIEW: FLIP CARD */}
      <div 
        className="block md:hidden relative w-[85vw] h-[44vh] [perspective:1000px]"
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
          
          {/* FRONT: IMAGE */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black/60">
            <div className="relative w-full aspect-[14/9] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-contain sm:object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-6">

              <span className="text-white/80 text-xs bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/40 backdrop-blur-md">

                Tap to View Details

              </span>

            </div>
            <h2 className="text-2xl font-bold text-pink-300 mb-2 text-center">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-4 text-center px-2 line-clamp-1">{event.description}</p>
          </div>

          {/* BACK: DETAILS */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-black/90 backdrop-blur-2xl p-6 flex flex-col overflow-y-auto">
            <h2 className="text-2xl font-bold text-pink-300 mb-2">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{event.description}</p>
            <div className="mb-4">
              <h3 className="text-[10px] uppercase tracking-widest text-orange-400 mb-2 font-bold">Rules</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-xs">
                {event.rules.map((rule, i) => <li key={i}>{rule}</li>)}
              </ul>
            </div>
            
            <div className="mt-auto flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2">
                    <a href={event.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-green-400/40 text-green-400 py-2 rounded-lg text-xs">WhatsApp</a>
                    <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="flex-1 relative px-4 py-2 rounded-lg bg-black text-center border border-pink-500 text-white text-xs shadow-[0_0_6px_2px_rgba(255,122,217,0.25)] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,122,217,0.6)]">Register</a>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col bg-black/60 w-[42vw] h-[110vh] rounded-2xl overflow-hidden backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01]">
        <div className="overflow-hidden h-[60vh]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-8 flex flex-col flex-1">
          <h2 className="text-3xl font-bold text-pink-300 mb-4">{event.title}</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">{event.description}</p>

          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-widest text-orange-400 mb-3 font-bold">Rules</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
              {event.rules.map((rule, i) => <li key={i}>{rule}</li>)}
            </ul>
          </div>

          <div className="mt-auto flex gap-4">
            <a href={event.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center border border-green-400/40 text-green-400 py-3 rounded-xl hover:bg-green-400/10 transition">
              WhatsApp Group
            </a>
            <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="relative px-8 py-3 rounded-xl bg-black w-full text-center border border-pink-500 text-white font-semibold shadow-[0_0_6px_2px_rgba(255,122,217,0.25)] transition-all duration-300 hover:shadow-[0_0_36px_10px_rgba(255,122,217,0.8)] hover:border-pink-400">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

const nonTechWords = [ 
  { text: "Non", className: "text-[#ff7ad9] page-title  text-2xl sm:text-5xl md:text-6xl" }, 
  { text: "Technical", className: "text-[#ff7ad9] page-title  text-2xl sm:text-5xl md:text-6xl" }, 
  { text: "Events", className: "text-[#ff7ad9] page-title  text-2xl sm:text-5xl md:text-6xl" } 
];

const NonTechEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-white pt-[4vh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Galaxy
          mouseRepulsion
          density={0.8}
          glowIntensity={0.4}
          hueShift={330}
          speed={0.5}
        />
      </div>

      {/* TOP NAV */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-between">
          <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-full bg-black/60 border border-pink-400/40 text-pink-300 text-sm">
            ← Back
          </button>
          <button onClick={() => navigate("/tech")} className="px-4 py-2 rounded-full bg-black/60 border border-pink-400/40 text-pink-300 text-sm">
            Tech Events
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* TITLE */}
        <div className="flex flex-col items-center justify-center mt-12 mb-10"> 
          <TypewriterEffectSmooth words={nonTechWords} className="justify-center" cursorClassName="bg-[#ff7ad9]" /> 
        </div>

        {/* REWARDS & NOTES CONTAINER */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <div className="bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-[1.5vh] md:text-lg text-center font-medium">
              🏆 <span className="text-pink-300 font-semibold">Winner:</span> ₹500
            </p>
          </div>

          {/* IMPORTANT NOTES SECTION */}
          <AnimatedItem delay={0.05}>
            <div className="mt-6 flex justify-center relative w-full font-sans rounded-2xl p-[2px] overflow-hidden">
              <div className="flex items-center justify-center font-sans flex-col max-w-fit relative rounded-2xl bg-gradient-to-r from-pink-500/5 via-orange-500/5 to-pink-500/5 border border-white/10 px-6 md:px-10 py-8 backdrop-blur-sm">
                
                <div className="flex items-center font-sans gap-3 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-300">
                    Important Notes
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 w-full">
                  {notes.map((note, i) => (
                    <AnimatedItem key={i} delay={0.1 * (i + 1)}>
                      <div className="flex items-center w-full gap-4 rounded-xl bg-white/5 border border-pink-400/20 px-6 py-4 hover:bg-white/10 transition-all duration-300">
                        {/* Glowing Pink Bullet Point */}
                        <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(255,122,217,0.8)]" />
                        
                        <p className="text-sm md:text-base text-gray-200 font-medium leading-relaxed">
                          {note}
                        </p>
                      </div>
                    </AnimatedItem>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>

        {/* CARDS GRID */}
        <div className="flex flex-col gap-12 md:gap-[10vh] items-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-[6vw] justify-center">
            {events.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTechEvents;