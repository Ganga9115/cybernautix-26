import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
