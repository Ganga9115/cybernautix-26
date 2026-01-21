import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/GalaxyAnimation/Galaxy";


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

  const hyperspeedOptions = {
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [12, 80],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    },
  };
  const timeline = [
    { time: "8:30 – 9:00", event: "Registration" },
    { time: "9:00 – 10:00", event: "Inauguration Ceremony" },
    { time: "10:00 – 12:00", event: "Technical Events" },
    { time: "12:00 – 1:30", event: "Lunch Break" },
    { time: "1:30 – 2:00", event: "Valedictory Ceremony" }
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}
    >
          

      {/* Galaxy Animation - Overlay on top of Hyperspeed */}
      <div className="absolute inset-0 z-5 w-full h-full opacity-60">
        <Galaxy 

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



      

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* General Norms */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-6 px-6 py-2 rounded-lg
            bg-gradient-to-r from-pink-500/20 to-purple-500/20
            border border-pink-500/40 w-96 mx-auto">
            <h3 className="text-4xl font-bold text-pink-400">
              General Norms 📝
            </h3>
          </div>

          <p className="text-purple-200 mb-10 flex items-center justify-center">
            Please read all instructions carefully before participating.
          </p>

          <div className="grid gap-5">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-purple-700
  bg-gradient-to-r from-[#1f0b3a] via-[#160728] to-[#0a0118]
  backdrop-blur-md
  shadow-[0_0_25px_rgba(168,85,247,0.15)]
  hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]
  hover:border-purple-500
  transition-all duration-300
  w-[700px] max-w-full mx-auto"

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
<section className="mb-24">
  <div className="flex items-center justify-center mb-16 px-6 py-2 rounded-lg
    bg-gradient-to-r from-pink-500/20 to-purple-500/20
    border border-pink-500/40 w-96 mx-auto">
    <h3 className="text-4xl font-bold text-pink-400">
      Event Timeline ⏳
    </h3>
  </div>

  <div className="relative">
    {/* Center vertical spine */}
    <div className="absolute left-1/2 top-0 bottom-0 w-[3px]
      -translate-x-1/2
      bg-gradient-to-b from-purple-600 via-blue-500 to-pink-500
      shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

    <div className="space-y-16">
      {timeline.map((item, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <div key={idx} className="relative flex items-center w-full">
            {/* Center dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-[#0a0118]
                border-4 border-purple-500
                shadow-[0_0_20px_rgba(168,85,247,0.8)]
                flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
              </div>
            </div>

            {/* Timeline card */}
            <div
              className={`w-full md:w-1/2 ${
                isLeft
                  ? "md:pr-16 md:text-right"
                  : "md:pl-16 md:ml-auto"
              }`}
            >
              <div
                className="inline-block rounded-2xl border border-purple-700
                bg-gradient-to-r from-[#1f0b3a] via-[#160728] to-[#0a0118]
                backdrop-blur-md
                p-6
                shadow-[0_0_25px_rgba(168,85,247,0.15)]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]
                transition-all duration-300"
              >
                <p className="text-purple-400 font-semibold text-sm mb-1">
                  {item.time}
                </p>
                <p className="text-white text-xl font-semibold">
                  {item.event}
                </p>
              </div>
            </div>
          </div>
        );
      })}
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
