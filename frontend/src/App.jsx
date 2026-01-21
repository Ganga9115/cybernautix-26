import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/LoagingPage";
import HomePage from "./components/HomePage";
import GeneralNormsPage from "./components/GeneralNormsPage";
import TechEvents from "./components/TechEvents";
import NonTechEvents from "./components/NonTechEvents";
import EventsPage from "./components/EventsPage";
import BusRoutes from "./components/BusRoutes";
export default function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000); // 10 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/general-norms" element={<GeneralNormsPage />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/tech" element={<TechEvents />} />
        <Route path="/bus-routes" element={<BusRoutes />} />
        <Route path="/non-tech" element={<NonTechEvents />} />
      </Routes>
    </Router>
  );
}
