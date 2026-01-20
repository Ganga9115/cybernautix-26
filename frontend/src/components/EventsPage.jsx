import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* Tech Events Card */}
        <div
          onClick={() => navigate("/tech")}
          className="cursor-pointer group bg-black/40 border border-cyan-400/20 rounded-2xl p-10 backdrop-blur-xl
          hover:border-cyan-400 hover:scale-[1.02] transition duration-500
          shadow-[0_0_40px_rgba(0,255,255,0.08)]"
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

        {/* Non-Tech Events Card */}
        <div
          onClick={() => navigate("/non-tech")}
          className="cursor-pointer group bg-black/40 border border-pink-400/20 rounded-2xl p-10 backdrop-blur-xl
          hover:border-pink-400 hover:scale-[1.02] transition duration-500
          shadow-[0_0_40px_rgba(255,105,180,0.1)]"
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

      </div>
    </div>
  );
};

export default EventsPage;
