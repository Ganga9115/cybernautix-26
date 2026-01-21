import React, { useState } from "react";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { useNavigate } from "react-router-dom";

export default function EventTimeline() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const navigate = useNavigate();

  const timeline = [
    { time: "8:30 – 9:00", event: "Registration" },
    { time: "9:00 – 10:00", event: "Inauguration Ceremony" },
    { time: "10:00 – 12:00", event: "Technical Events" },
    { time: "12:00 – 1:30", event: "Lunch Break" },
    { time: "1:30 – 2:00", event: "Valedictory Ceremony" },
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
       

       {/* Timeline */}
<section className="relative mt-12">

  {/* Heading spacing */}
  <div className="flex items-center justify-center mb-24 px-6 py-2 rounded-lg
    bg-gradient-to-r from-pink-500/20 to-purple-500/20
    border border-pink-500/40 w-96 mx-auto">
    <h3 className="text-4xl font-bold text-pink-400">
      Event Timeline
    </h3>
  </div>

  {/* Curved spine */}
  <svg
  className="absolute left-1/2 top-40 -translate-x-1/2 h-[calc(100%-16rem)] w-[200px]"
  viewBox="0 0 200 1000"
  fill="none"
  preserveAspectRatio="none"
>

    <path
      d="M100 0
         C 130 150, 70 300, 100 450
         C 130 600, 70 750, 100 1000"
      stroke="url(#timelineGradient)"
      strokeWidth="3"
      fill="none"
    />
    <defs>
      <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="50%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>

  {/* Timeline items */}
  <div className="relative flex flex-col gap-20">
    {timeline.map((item, idx) => {
      const isLeft = idx % 2 === 0;

      return (
        <div key={idx} className="relative flex justify-center">

          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20
            w-6 h-6 rounded-full bg-purple-500
            ring-4 ring-purple-500/30" />

          {/* Connector */}
          <div
            className={`absolute top-3 w-24 h-[2px] bg-purple-500
              ${isLeft ? "right-1/2 mr-6" : "left-1/2 ml-6"}`}
          />

          {/* Card */}
          <div
            className={`relative z-10 w-[320px] p-6 rounded-2xl
              border border-purple-700
              bg-gradient-to-r from-[#1f0b3a] via-[#160728] to-[#0a0118]
              shadow-[0_0_25px_rgba(168,85,247,0.2)]
              ${isLeft ? "mr-[420px]" : "ml-[420px]"}`}
          >
            <p className="text-purple-400 font-semibold mb-1">
              {item.time}
            </p>
            <p className="text-white text-xl font-medium">
              {item.event}
            </p>
          </div>

        </div>
      );
    })}
  </div>
</section>

{/* Actions */}
<div className="mt-20 flex justify-center gap-6">
  <button onClick={() => navigate("/events")}
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
