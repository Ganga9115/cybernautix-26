import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
import MainLayout from "./components/MainLayout";

import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import TechEvents from "./components/TechEvents";
import NonTechEvents from "./components/NonTechEvents";
import GeneralNormsPage from "./components/GeneralNormsPage";
import BusRoutes from "./components/BusRoutes";
import ContactPage from "./components/ContactPage";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/tech" element={<TechEvents />} />
        <Route path="/non-tech" element={<NonTechEvents />} />
        <Route path="/rules" element={<GeneralNormsPage />} />
        <Route path="/bus" element={<BusRoutes />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
