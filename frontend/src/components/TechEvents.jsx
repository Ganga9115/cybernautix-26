import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import EncryptedText from "../components/ui/EncryptedText";
const AnimatedItem = ({ children, delay = 0 }) => (
  <div 
    className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);
import tedx from "../assets/TechTactics.webp";
import paperpresentation from "../assets/PaperMania.webp";
import hackathon from "../assets/HackVerse.webp";
import promptStudio from "../assets/PromptStudio.webp";

const events = [
  {
    title: "HackVerse : Heroes edition",
    image: hackathon,
    description: "You don’t need superpowers to be a hero. You just need an idea.",
    rules: [
      "All team members must be present in final.",
      "Only one entry per team is allowed.",
      "Inter department teams allowed.",
      "Team size - 1 to 3 members.",
    ],
    whatsappLink: "https://chat.whatsapp.com/Ba6K8MGvnDLLqD8TxvXach",
    pptLink: "https://docs.google.com/presentation/d/1Roz6f7ek7bPkuI_NLAXsbYMjtCVpavXD/edit?usp=drive_link&ouid=111340339813860627456&rtpof=true&sd=true",
    registerLink: "https://forms.gle/28nraVEq96tnw4Rv9",
  },
  {
    title: "Paper-Mania",
    image: paperpresentation,
    description: "Innovate to create impactful ideas. Research • Present to inspire innovation.",
    rules: [
      "Participation is individual or in teams of up to three",
      "Original papers only; abstract submission mandatory and PDF format required.",
      "Presentation: 5–7 minutes, followed by Q&A; one laptop per team.",
      "Professional conduct is mandatory; judges’ and organizers’ decisions are final.",
    ],
    whatsappLink: "https://chat.whatsapp.com/K8rFXRHTTT7BNQlgPZi1La",
    pptLink: "https://docs.google.com/presentation/d/1Cwz6uFiVPeGHak_boVa-ebHxXirOVNz2GpGyzGLZnKU/edit?usp=sharing",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScNHnzrfsxWNcPQQA1qDArEJLk8-EVNhQ1T7uVSHhEw0gOIEw/viewform?usp=publish-editor",
  },
  {
    title: "TECH TACTICS",
    image: tedx,
    description: "On spot technical speaking battle where ideas block and tackle over the stage ",
    rules: [
      "Team size-1 , single-round technical speaking event conducted in English.",
      "Topics given on spot; mobiles, notes, PPTs strictly prohibited.",
      "Paired debate using Attack–Block–Tackle format with role reversal",
      "Professional conduct mandatory; judges’ and organizers’ decisions final.",
    ],
    whatsappLink: "https://chat.whatsapp.com/LKwXUtS5PGZLLEfOLriJMy",
    registerLink: "https://forms.gle/XkzVwsU1VkTx47br8",
  },
  {
    title: "Prompt Studio",
    image: promptStudio,
    description: "Where AI becomes your director and imagination writes the script.",
    rules: [
      "Team size: 1–2 members",
      "Create an AI-generated movie trailer based on the assigned genre.",
      "Only free AI tools are permitted; paid tools are prohibited",
      "Content must be original and suitable for an academic environment",
    ],
    whatsappLink: "https://chat.whatsapp.com/GPwV6JVmaKyCEvCzGdacGw",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBkKe2Jc9V01m5Q-SxC9pW4W2z3rfXl-ZdxCcko-AdNl9lbA/viewform?usp=header",
  },
];

const notes = [
  "Event coordinators’ details are available on the Contact page.",
  "A detailed event description and complete rules will be provided in the Google Form.",
];

/* =======================
    EVENT CARD COMPONENT
======================= */
const EventCard = ({ event, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <ElectricBorder
      color="#22d3ee"
      speed={0.8}
      chaos={0.08}
      style={{ borderRadius: 24 }}
    >
      {/* MOBILE VIEW: FLIP CARD */}
      <div 
        className="block md:hidden relative w-[85vw] h-[52vh] [perspective:1000px]"
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
             <h2 className="text-2xl font-bold text-[#22d3ee] mb-2 text-center">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-4 text-center">{event.description}</p>
          </div>

          {/* BACK: DETAILS */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-black/90 backdrop-blur-2xl p-6 flex flex-col overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#22d3ee] mb-2">{event.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{event.description}</p>
            <div className="mb-4">
              <h3 className="text-[10px] uppercase tracking-widest text-purple-400 mb-2">Rules</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-xs">
                {event.rules.map((rule, i) => <li key={i}>{rule}</li>)}
              </ul>
            </div>
            
            <div className="mt-auto flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
                {event.pptLink && (
                   <a href={event.pptLink} target="_blank" rel="noopener noreferrer" className="w-full text-center border border-yellow-400/40 text-yellow-300 py-2 rounded-lg text-xs">PPT Template</a>
                )}
                <div className="flex gap-2">
                    <a href={event.whatsappLink} target="_blank" className="flex-1 text-center border border-green-400/40 text-green-400 py-2 rounded-lg text-xs">WhatsApp</a>
                    <a href={event.registerLink} target="_blank"className="flex-1 relative px-4 py-2 rounded-lg bg-black text-center border border-purple-500 text-white text-xs shadow-[0_0_6px_2px_rgba(168,85,247,0.25)] transition-all duration-300 hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.95)] hover:border-purple-400">Register</a>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW: ORIGINAL STATIC CARD */}
      <div className={`hidden md:flex flex-col bg-black/60 w-[42vw] ${index < 2 ? "h-[120vh]" : "h-[110vh]"} rounded-2xl overflow-hidden bg-black/90 transition-transform duration-500 hover:scale-[1.01]`}>
        <div className="overflow-hidden h-[60vh]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-8 flex flex-col flex-1">
          <h2 className="text-3xl font-bold text-[#22d3ee] mb-4">{event.title}</h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">{event.description}</p>

          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-3">Rules</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
              {event.rules.map((rule, i) => <li key={i}>{rule}</li>)}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            {index < 2 && event.pptLink && (
              <a href={event.pptLink} target="_blank" rel="noopener noreferrer" className="w-full text-center border border-yellow-400/40 text-yellow-300 py-3 rounded-xl hover:bg-yellow-400/10 transition">
                PPT Template
              </a>
            )}

            <div className="flex gap-4">
              <a href={event.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center border border-green-400/40 text-green-400 py-3 rounded-xl hover:bg-green-400/10 transition">
                WhatsApp Group
              </a>
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="relative px-8 py-3 rounded-xl bg-black w-full text-center border border-purple-500 text-white font-semibold shadow-[0_0_6px_2px_rgba(168,85,247,0.25)] transition-all duration-300 hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.95)] hover:border-purple-400">
                Register Now 
              </a>
            </div>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

const TechEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-white pt-[4vh]">
      {/* GALAXY BACKGROUND */}
      {/* <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Galaxy mouseRepulsion density={0.5} speed={0.3} />
      </div> */}

      {/* TOP NAV */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-between">
          <button onClick={() => navigate(-1)} className="px-4 py-2 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300 text-sm">
            ← Back
          </button>
          <button onClick={() => navigate("/non-tech")} className="px-4 py-2 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300 text-sm">
            Non-Tech Events
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* TITLE */}
        <div className="flex justify-center mt-12 mb-10">
          <EncryptedText
            text="Technical Events"
            encryptedClassName="text-3xl sm:text-4xl md:text-6xl text-[#22d3ee] opacity-80"
            revealedClassName="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#0891b2] page-title"
            revealDelayMs={55}
          />
        </div>

        {/* REWARDS & NOTES */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-[1.5vh] md:text-lg text-center">
              🏆 <span className=" text-[#22d3ee] font-semibold">Winner:</span> ₹1,000
              &nbsp; | &nbsp;
              🥈 <span className="text-[#22d3ee] font-semibold">Runner-up:</span> ₹500
            </p>
          </div>

          {/* IMPORTANT NOTES SECTION */}
<AnimatedItem delay={0.05}>
  <div className="mt-6 flex justify-center relative w-full font-sans rounded-2xl p-[2px] overflow-hidden">
    <div className="flex items-center justify-center font-sans flex-col max-w-fit relative rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 border border-white/10 px-6 md:px-10 py-8 backdrop-blur-sm">
      
      {/* Heading */}
      <div className="flex items-center font-sans gap-3 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#22d3ee]">
          Important Notes
        </h3>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 gap-4 w-full">
        {notes.map((note, i) => (
          <AnimatedItem key={i} delay={0.1 * (i + 1)}>
            <div className="flex items-center w-full gap-4 rounded-xl bg-white/5 border border-cyan-400/20 px-6 py-4 hover:bg-white/10 transition-all duration-300">
              {/* Glowing Bullet Point */}
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              
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
          {/* ROW 1 */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[6vw] justify-center">
            {events.slice(0, 2).map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[6vw] justify-center">
            {events.slice(2, 4).map((event, index) => (
              <EventCard key={index + 2} event={event} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechEvents;