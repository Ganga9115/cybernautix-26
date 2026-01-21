import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import aiBg from "../assets/aiBg.png";
const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center px-6">
       {/* Base Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(to bottom, #050814, #0a0118, #050814)",
    }}
  />

  {/* AI Background Image */}
  <div
    className="absolute inset-0 z-[1]"
    style={{
      backgroundImage: `url(${aiBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.25, // 🔥 adjust if needed
    }}
  />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl w-full">

        {/* ================= TECH EVENTS ================= */}
        <ElectricBorder
          color="#22d3ee"
          speed={0.9}
          chaos={0.08}
          style={{ borderRadius: 24 }}
        >
          <div
            onClick={() => navigate("/tech")}
            className="cursor-pointer group bg-black/50 rounded-2xl p-10 backdrop-blur-xl
            transition duration-500 hover:scale-[1.02]"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Technical Events
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Coding, problem-solving, innovation and technology-driven challenges.
            </p>

            <div className="mt-6 text-cyan-300 font-semibold group-hover:translate-x-2 transition">
              Explore →
            </div>
          </div>
        </ElectricBorder>

        {/* ================= NON-TECH EVENTS ================= */}
        <ElectricBorder
          color="#ec4899"
          speed={0.9}
          chaos={0.08}
          style={{ borderRadius: 24 }}
        >
          <div
            onClick={() => navigate("/non-tech")}
            className="cursor-pointer group bg-black/50 rounded-2xl p-10 backdrop-blur-xl
            transition duration-500 hover:scale-[1.02]"
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-4">
              Non-Technical Events
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Creativity, confidence, stage performance and fun-filled activities.
            </p>

            <div className="mt-6 text-pink-300 font-semibold group-hover:translate-x-2 transition">
              Explore →
            </div>
          </div>
        </ElectricBorder>

      </div>
    </div>
  );
};

export default EventsPage;
