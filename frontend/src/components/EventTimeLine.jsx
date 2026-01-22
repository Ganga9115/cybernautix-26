import React from "react";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
import { useNavigate } from "react-router-dom";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo";

export default function EventTimeline() {
  const navigate = useNavigate();

  const timeline = [
    { time: "8:30 – 9:00", event: "Registration" },
    { time: "9:00 – 10:00", event: "Inauguration Ceremony" },
    { time: "10:00 – 12:00", event: "Technical Events" },
    { time: "12:00 – 1:30", event: "Lunch Break" },
    { time: "1:30 – 2:00", event: "Valedictory Ceremony" },
  ];

  const nonTechWords = [
  {
    text: "Event",
    className: "text-[#ff7ad9]",
  },
  {
    text: "TimeLine",
    className: "text-[#ff7ad9]",
  },
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Heading */}
         <TypewriterEffectSmooth
          words={nonTechWords}
          className="justify-center"
          cursorClassName="text-[#ff7ad9]"
        />

        {/* Timeline */}
        <section className="relative">
          {/* Center Vertical Line */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px]
            bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400"
          />

          <div className="flex flex-col gap-20">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex justify-center">
                  {/* Dot */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-20
                    w-6 h-6 rounded-full bg-purple-500
                    ring-4 ring-purple-500/30"
                  />

                  {/* Card */}
                  <div
                    className={`relative z-10 w-[320px] p-6 rounded-2xl
                      border border-purple-700
                      bg-gradient-to-r from-[#1f0b3a] via-[#160728] to-[#0a0118]
                      shadow-[0_0_20px_rgba(168,85,247,0.2)]
                      ${
                        isLeft
                          ? "md:-translate-x-[90%] md:pr-4"
                          : "md:translate-x-[90%] md:pl-4"
                      }
                      max-md:translate-x-0`}
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

        {/* Register Button */}
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => navigate("/events")}
            className="
              px-10 py-3 rounded-xl
              bg-black
              border border-purple-500
              text-white font-semibold
              shadow-[0_0_6px_2px_rgba(168,85,247,0.25)]
              transition-all duration-300
              hover:shadow-[0_0_24px_6px_rgba(168,85,247,0.9)]
            "
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}

