import { useNavigate } from "react-router-dom";
import ElectricBorder from "./ElectricBorder/ElectricBorder";


const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden bg-transparent">
      
      {/* GALAXY BACKGROUND */}
     

      {/* ================= REGISTRATION TEXT (UPDATED) ================= */}
      <div className="relative z-50 mb-10 text-center">
        <div className="inline-block relative">
          {/* Subtle Solid Glow - No Gradient */}
          <div className="absolute -inset-0.5 bg-cyan-500/30 rounded-xl blur-md"></div>
          
          {/* Main Container: Reduced radius, solid background, no gradients */}
          <div className="relative px-8 py-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl shadow-xl">
            <h2 className="text-[1.5vh] md:text-xl font-bold tracking-[0.2em] text-white page-title">
              Registration closes on <span className="text-cyan-400">Feb 5</span>
            </h2>
          </div>
        </div>
      </div>

      {/* ================= CARDS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 z-50 max-w-5xl w-full">
        
        {/* TECH EVENTS */}
        <ElectricBorder color="#22d3ee" speed={0.9} chaos={0.08} style={{ borderRadius: 24 }}>
          <div
            onClick={() => navigate("/tech")}
            className="cursor-pointer group bg-black/50 rounded-2xl p-10 backdrop-blur-xl transition duration-500 hover:scale-[1.02]"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 page-title">Technical Events</h2>
            <p className="text-gray-300">Coding, problem-solving, innovation and technology-driven challenges.</p>
            <div className="mt-6 text-cyan-300 font-semibold group-hover:translate-x-2 transition">Explore →</div>
          </div>
        </ElectricBorder>

        {/* NON-TECH EVENTS */}
        <ElectricBorder color="#ec4899" speed={0.9} chaos={0.08} style={{ borderRadius: 24 }}>
          <div
            onClick={() => navigate("/non-tech")}
            className="cursor-pointer group bg-black/50 rounded-2xl p-10 backdrop-blur-xl transition duration-500 hover:scale-[1.02]"
          >
            <h2 className="text-3xl font-bold text-pink-400 mb-4 page-title">Non-Technical Events</h2>
            <p className="text-gray-300">Creativity, confidence, stage performance and fun-filled activities.</p>
            <div className="mt-6 text-pink-300 font-semibold group-hover:translate-x-2 transition">Explore →</div>
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default EventsPage;