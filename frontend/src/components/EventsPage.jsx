import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";
import Galaxy from "../components/GalaxyAnimation/Galaxy"; 


const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex items-center justify-center  px-6" style={{
        background: "linear-gradient(to bottom, #0a0118, #1a0b2e, #0a0118)",
      }}>
        <div className="absolute inset-0 z-5 w-full h-full opacity-60">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 z-50 max-w-5xl w-full">

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
            <h2 className="text-3xl page-title font-bold text-cyan-400 mb-4">
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
            transition duration-500 hover:scale-[1.02] z-50"
          >
            <h2 className="text-3xl page-title font-bold text-pink-400 mb-4">
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