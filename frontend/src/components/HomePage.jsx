import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage({ onNavigate }) {
  const [langIndex, setLangIndex] = useState(0);
 const navigate = useNavigate();
  const languages = [
    { lang: 'ENGLISH', text: 'RMK Engineering College Department of Information Technology Presents CYBERNAUTICS 2026' },
    { lang: 'தமிழ்', text: 'RMK பொறியியல் கல்லூரி தகவல் தொழில்நுட்ப துறை வழங்குகிறது CYBERNAUTICS 2026' },
    { lang: 'తెలుగు', text: 'RMK ఇంజనీరింగ్ కళాశాల ఇన్ఫర్మేషన్ టెక్నాలజీ విభాగం ప్రస్తుతం CYBERNAUTICS 2026' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <style>{`
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes createStar {
          from {
            opacity: 0;
            transform: translateY(0);
          }
          to {
            opacity: 1;
            transform: translateY(100vh);
          }
        }
        
        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: createStar linear infinite, twinkle 3s infinite;
        }
        
        .fade-in {
          animation: floatUp 0.8s ease-out forwards;
        }
        
        .language-change {
          animation: floatUp 0.6s ease-out;
        }
      `}</style>

      {/* Galaxy Background */}
      <div className="absolute inset-0">
        {/* Animated stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 8 + 10) + 's',
              animationDelay: (Math.random() * 5) + 's',
            }}
          />
        ))}

        {/* Galaxy gradient circles */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8 px-4">
          {/* Language changing text */}
          <div className="fade-in min-h-32 flex items-center justify-center">
            <div key={langIndex} className="language-change">
              <p className="text-sm md:text-base text-cyan-300 mb-2 font-semibold">
                {languages[langIndex].lang}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {languages[langIndex].text}
              </h1>
            </div>
          </div>

          {/* Buttons */}
          <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105"
            
             onClick={() => navigate("/events")}>
              REGISTER
            </button>
            <button
             onClick={() => navigate("/general-norms")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-400/50 transition transform hover:scale-105"
            >
              GENERAL NORMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}