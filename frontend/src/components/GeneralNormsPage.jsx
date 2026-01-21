import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GeneralNormsPage() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const navigate = useNavigate();

  const rules = [
    "Students must bring their respective college ID card.",
    "Usage of mobile phones inside the campus should be avoided.",
    "Confirmation mail will be sent to your registered email ID.",
    "Participants must use only the college bus provided.",
    "Boys must come in formal with clean shave.",
    "Girls should wear formal dress.",
    "No on-spot registration is allowed."
  ];

  const timeline = [
    { time: "8:30 – 9:00", event: "Registration" },
    { time: "9:00 – 10:00", event: "Inauguration Ceremony" },
    { time: "10:00 – 12:00", event: "Technical Events" },
    { time: "12:00 – 1:30", event: "Lunch Break" },
    { time: "1:30 – 2:00", event: "Valedictory Ceremony" }
  ];

  return (
    <div className="min-h-screen 
      bg-gradient-to-b 
      from-[#0a0118] 
      via-[#2a0f4a] 
      to-[#0a0118] 
      text-white">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#0a0118]/80 backdrop-blur border-b border-purple-700/40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >
            <ChevronLeft size={22} />
            <span className="font-medium">Back</span>
          </button>

          <h2 className="text-xl font-bold tracking-wide text-white">
            CYBERNAUTICS 2026
          </h2>

          <div className="w-24" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* General Norms */}
        <section className="mb-20">
          <div className="inline-block mb-6 px-6 py-2 rounded-lg
            bg-gradient-to-r from-pink-500/20 to-purple-500/20
            border border-pink-500/40">
            <h3 className="text-4xl font-bold text-pink-400">
              General Norms 📝
            </h3>
          </div>

          <p className="text-purple-200 mb-10">
            Please read all instructions carefully before participating.
          </p>

          <div className="grid gap-5">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-xl border border-purple-800 
                  bg-gradient-to-r from-[#1a0b2e] to-[#0a0118]
                  hover:border-purple-600 transition"
              >
                <div className="w-8 h-8 flex items-center justify-center 
                  rounded-full bg-purple-600 text-black font-bold">
                  {idx + 1}
                </div>
                <p className="text-purple-100 text-lg">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="inline-block mb-12 px-6 py-2 rounded-lg
            bg-gradient-to-r from-pink-500/20 to-purple-500/20
            border border-pink-500/40">
            <h3 className="text-4xl font-bold text-pink-400">
              Event Timeline ⏳
            </h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px]
              bg-gradient-to-b from-purple-600 via-blue-500 to-pink-500" />

            <div className="space-y-10 pl-20">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">

                  {/* Dot */}
                  <div className="absolute -left-[52px] top-2 w-10 h-10 
                    rounded-full border-4 border-purple-600 bg-[#0a0118]
                    flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                  </div>

                  {/* Card */}
                  <div
                    onClick={() =>
                      setExpandedEvent(expandedEvent === idx ? null : idx)
                    }
                    className="cursor-pointer rounded-xl border border-purple-700
                      bg-gradient-to-r from-purple-900/30 to-blue-900/20
                      p-6 hover:border-purple-500 transition"
                  >
                    <p className="text-purple-400 font-semibold text-lg mb-1">
                      {item.time}
                    </p>
                    <p className="text-white text-xl font-medium">
                      {item.event}
                    </p>

                    {expandedEvent === idx && (
                      <div className="mt-4 pt-4 border-t border-purple-700 text-purple-200">
                        Additional details will be announced on the event day.
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register Button */}
        <div className="mt-20 flex justify-center">
          <button className="px-14 py-4 rounded-xl font-bold text-lg text-black
            bg-gradient-to-r from-purple-900 via-blue-300 to-pink-700
            hover:shadow-xl hover:shadow-purple-600/40
            transition transform hover:scale-105">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
