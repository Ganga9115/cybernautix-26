import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import aiBg from "../assets/aiBg.jpg.jpeg";
import Galaxy from "../components/GalaxyAnimation/Galaxy";
const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* 1. FIXED IMAGE BACKGROUND - The deepest layer */}
      <div
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url(${aiBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.20,
          pointerEvents: "none",
        }}
      /> 

      {/* 2. GALAXY ANIMATION - The middle layer */}
      <div className="fixed inset-0 z-[1] w-full h-full opacity-60 pointer-events-none">
        <Galaxy density={0.4} speed={0.25} /* ...props */ />
      </div>

      {/* 3. CONTENT LAYER - The top layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          {/* All pages inside Outlet MUST be bg-transparent */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
