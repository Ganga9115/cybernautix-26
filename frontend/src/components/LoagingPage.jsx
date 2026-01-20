import React from 'react';

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
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
        
        .loading-text {
          animation: fadeInScale 1s ease-out, pulse 1.5s ease-in-out 1s infinite;
          font-size: clamp(2rem, 10vw, 4rem);
        }

        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: createStar linear infinite, twinkle 3s infinite;
        }

        @keyframes loadingLine {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .loading-line {
          animation: loadingLine 10s ease-in-out forwards;
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
      
      <div className="relative z-10 text-center space-y-12">
        <div className="loading-text">
          <h1 className="text-white font-bold mb-4">RMK ENGINEERING COLLEGE</h1>
          <h2 className="text-cyan-400 font-semibold">PRESENTS</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mt-4">
            CYBERNAUTICS 2026
          </h3>
        </div>
        
        {/* Loading Line */}
        <div className="w-80 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 loading-line" />
        </div>
      </div>
    </div>
  );
}