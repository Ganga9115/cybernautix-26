import React from "react";
import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";

import nontech1img from "../assets/HawkinsDimension.png";
import nontech2img from "../assets/PhantomX.png";

const events = [
  {
    title: "Hawkins Dimension : Decode from Doodles",
    image: nontech1img,
    description:
      "A fast-paced three-round drawing and guessing challenge that tests creativity, teamwork, and quick thinking.",
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
    description:
      "A Halloween-themed innovation symposium fusing creativity with mystery and spooky fun.",
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

/* =======================
   EVENT CARD
======================= */
const EventCard = ({ event }) => {
  return (
    <ElectricBorder color="#ff7ad9" speed={0.8} chaos={0.08} style={{ borderRadius: 24 }}>
      <div
        className="
          bg-black/60
          w-[80vw] sm:w-[70vw] md:w-[42vw]
          h-[110vh]
          rounded-2xl
          overflow-hidden
          backdrop-blur-xl
          transition-transform duration-500
          hover:scale-[1.02]
        "
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[60vh] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col h-[45vh]">
          <h2 className="text-2xl font-bold text-pink-300 mb-3">
            {event.title}
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            {event.description}
          </p>

          <div className="mt-4">
            <h3 className="text-sm uppercase tracking-widest text-orange-400 mb-2">
              Rules
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {event.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="mt-[2vh] flex gap-4">
            <a
              href={event.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full text-center
                border border-green-400/40
                text-green-400
                py-2 rounded-lg
                hover:bg-green-400/10
                transition
              "
            >
              WhatsApp Group
            </a>

            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full text-center
                bg-gradient-to-r from-pink-500 to-orange-500
                text-black font-semibold
                py-2 rounded-lg
                hover:opacity-90
                transition
              "
            >
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

const nonTechWords = [ { text: "Non", className: "text-[#ff7ad9]", }, { text: "Technical", className: "text-[#ff7ad9]", }, { text: "Events", className: "text-[#ff7ad9]", }, ];
const NonTechEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white pt-[4vh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
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

      {/* TOP NAV */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-full bg-black/60 border border-pink-400/40 text-pink-300"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/tech")}
            className="px-4 py-2 rounded-full bg-black/60 border border-pink-400/40 text-pink-300"
          >
            Tech Events
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* TITLE */}
        <div className="flex flex-col items-center justify-center mt-10"> <TypewriterEffectSmooth words={nonTechWords} className="justify-center" cursorClassName="text-[#ff7ad9]" /> </div>

        {/* REWARDS */}
        <div className="mt-10 flex justify-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-400/30 rounded-xl px-8 py-5 backdrop-blur">
            <p className="text-lg text-center">
              🏆 <span className="text-pink-300 font-semibold">Winner:</span> ₹1,000
            </p>
          </div>
        </div>

        {/* IMPORTANT NOTES */}
        <div className="mt-6 flex justify-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-400/30 rounded-xl px-8 py-6 backdrop-blur max-w-3xl w-full">
            <h3 className="text-center text-xl md:text-2xl font-semibold text-pink-300 mb-4">
              Important Notes
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-200 text-base md:text-lg">
              <li>
                Event coordinators’ contact details are available on the{" "}
                <span className="text-pink-300 font-medium">Contact</span> page.
              </li>
              <li>
                Detailed event description and rules will be provided in the{" "}
                <span className="text-pink-300 font-medium">Google Form</span>.
              </li>
            </ul>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-20 flex flex-col gap-[10vh] items-center">
          <div className="flex flex-col md:flex-row gap-[6vw] justify-center">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTechEvents;
