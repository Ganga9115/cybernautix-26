import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import aiBg from "../assets/aiBg.jpg.jpeg";
const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div
            className="absolute inset-0 z-[1]"
            style={{
              backgroundImage: `url(${aiBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.25, // 👈 tweak this (0.15 – 0.35)
              height:"100vh",
              position:"fixed",
              width:"100vw"
            }}
          /> 
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
