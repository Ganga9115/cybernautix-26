import React from "react";
import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import EncryptedText from "../components/ui/EncryptedText";

import tedx from "../assets/Raw and Rapid.png";
import paperpresentation from "../assets/PaperMania.png";
import hackathon from "../assets/HackVerse.png";
import promptStudio from "../assets/PromptStudio.png";

const events = [
  {
    title: "HackVerse : Heroes edition",
    image: hackathon,
    description:
      "Where Innovators Become Heroes",
    rules: [
      "All team members must be present during the offline final.",
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
    description:
      "Innovate to create impactful ideas. Research • Present to inspire innovation.",
    rules: [
      "UG & PG students (1–3 members)",
      "5–8 minutes presentation + Q&A",
      "PDF only, one laptop per team",
      "Abstract submission mandatory",
    ],
    whatsappLink: "https://chat.whatsapp.com/K8rFXRHTTT7BNQlgPZi1La",
    pptLink: "https://docs.google.com/presentation/d/1Cwz6uFiVPeGHak_boVa-ebHxXirOVNz2GpGyzGLZnKU/edit?usp=sharing",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScNHnzrfsxWNcPQQA1qDArEJLk8-EVNhQ1T7uVSHhEw0gOIEw/viewform?usp=publish-editor",
  },
  {
    title: "TECH TACTICS",
    image: tedx,
    description:
      "On spot technical speaking battle where ideas block and tackle over the stage ",
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
    description:
      "Where AI becomes your director and imagination writes the script.",
    rules: [
      "Team size: 1–2 members",
      "Prompt engineering based",
      "Theme revealed on spot",
      "Creativity matters most",
    ],
    whatsappLink: "https://chat.whatsapp.com/GPwV6JVmaKyCEvCzGdacGw",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBkKe2Jc9V01m5Q-SxC9pW4W2z3rfXl-ZdxCcko-AdNl9lbA/viewform?usp=header",
  },
];


/* =======================
   EVENT CARD COMPONENT
======================= */
const EventCard = ({ event, index }) => {
  return (
    <ElectricBorder
      color="#22d3ee"
      speed={0.8}
      chaos={0.08}
      style={{ borderRadius: 24 }}
    >
      <div
  className={`
    bg-black/60
    w-[80vw] sm:w-[70vw] md:w-[42vw]
    ${index < 2 ? "h-[120vh]" : "h-[110vh]"}
    rounded-2xl
    overflow-hidden
    backdrop-blur-xl
    transition-transform duration-500
    hover:scale-[1.02]
  `}
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
          <h2 className="text-2xl font-bold text-[#22d3ee] mb-3">
            {event.title}
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            {event.description}
          </p>

          <div className="mt-4">
            <h3 className="text-sm uppercase tracking-widest text-purple-400 mb-2">
              Rules
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {event.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
<div className="mt-[2vh] flex flex-col gap-3">
  {/* PPT TEMPLATE — FIRST TWO CARDS ONLY */}
  {index < 2 && event.pptLink && (
    <a
      href={event.pptLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full text-center
        border border-yellow-400/40
        text-yellow-300
        py-2 rounded-lg
        hover:bg-yellow-400/10
        transition
      "
    >
      PPT Template
    </a>
  )}

  <div className="flex gap-4 mt-[2vh]">
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
        relative px-8 py-3 rounded-xl
                bg-black w-full text-center
                border border-purple-500
                text-white font-semibold
                shadow-[0_0_6px_2px_rgba(168,85,247,0.25)]
                transition-all duration-300 ease-out
                hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.95)]
                hover:border-purple-400
      "
    >
      Register Now →
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
    <div className="relative min-h-screen bg-black overflow-hidden text-white pt-[4vh]">
      {/* GALAXY BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
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
          starSpeed={0.3}
          speed={0.5}
        />
      </div>

      {/* TOP NAV */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 pt-6 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/non-tech")}
            className="px-4 py-2 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300"
          >
            Non-Tech Events
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* TITLE */}
        <div className="flex justify-center mt-12">
          <EncryptedText
            text="Technical Events"
            encryptedClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#22d3ee] opacity-80"
            revealedClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#67e8f9] via-[#22d3ee] to-[#0891b2]"
            revealDelayMs={55}
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

      {/* Important Notes */}
<div className="mt-6 flex justify-center">
  <div
    className="
      bg-gradient-to-r from-cyan-500/20 to-purple-500/20
      border border-cyan-400/30
      rounded-xl
      px-8 py-6
      backdrop-blur
      max-w-3xl w-full
    "
  >
    <h3 className="text-center text-xl md:text-2xl font-semibold text-[#22d3ee] mb-4">
      Important Notes
    </h3>

    <ul className="list-disc list-inside space-y-3 text-gray-200 text-base md:text-lg">
      <li>
        Event coordinators’ contact details are available on the{" "}
        <span className="text-[#22d3ee] font-medium">Contact</span> page.
      </li>
      <li>
        A detailed event description and complete rules will be provided in the{" "}
        <span className="text-[#22d3ee] font-medium">Google Form</span>.
      </li>
    </ul>
  </div>
</div>



        {/* CARDS — MANUAL ROWS */}
        <div className="mt-20 flex flex-col gap-[10vh] items-center">
          {/* ROW 1 */}
          <div className="flex flex-col md:flex-row gap-[6vw] justify-center">
            {events.slice(0, 2).map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col md:flex-row gap-[6vw] justify-center">
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
