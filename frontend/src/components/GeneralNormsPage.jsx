import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function GeneralNormsPage({ onNavigate }) {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const rules = [
    'Please read all rules carefully before proceeding',
    'Students must bring their respective college ID card.',
    'Usage of mobile phones and other electronic gadgets inside the campus should be avoided.',
    'Confirmation mail for selection will be sent to your registered mail id.',
    'Participants must only use the college bus which will be available on March 17th.',
    'Boys must come in formal with clean shave.',
    'Girls should wear formal dress.',
    'No onspot Registration Allowed.',
  ];

  const timeline = [
    { time: '8:30 - 9:00', event: 'Registration starts at RM Block entrance' },
    { time: '9:00 - 10:00', event: 'Inauguration ceremony at Seminar Hall - New block' },
    { time: '10:00 - 12:00', event: 'Events (Technical Events)' },
    { time: '12:00 - 1:30', event: 'Lunch' },
    { time: '1:30 - 2:00', event: 'Valedictory ceremony' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900/20 to-black">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes dotGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
          }
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .timeline-dot {
          animation: dotGlow 2s infinite;
        }
      `}</style>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            <ChevronLeft size={24} />
            <span className="font-semibold">Back</span>
          </button>
          <h2 className="text-2xl font-bold text-white">CYBERNAUTICS 2026</h2>
          <div className="w-24" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* General Rules Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-cyan-300 mb-8 slide-in-left">General Rules</h3>
          <p className="text-gray-300 mb-8 slide-in-left">
            Please read all rules carefully before proceeding
          </p>

          <div className="grid gap-4">
            {rules.slice(1).map((rule, idx) => (
              <div
                key={idx}
                className="slide-in-left bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-4 hover:border-cyan-400/60 transition"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="text-black text-sm font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-white text-lg">{rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-cyan-300 mb-8 slide-in-right">Timeline</h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="slide-in-right ml-32"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-2 top-2 w-12 h-12 bg-black rounded-full border-4 border-cyan-400 flex items-center justify-center timeline-dot">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/40 rounded-lg p-6 cursor-pointer hover:border-cyan-400/70 transition transform hover:scale-102"
                    onClick={() =>
                      setExpandedEvent(
                        expandedEvent === idx ? null : idx
                      )
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-cyan-300 font-bold text-xl mb-2">
                          {item.time}
                        </p>
                        <p className="text-white text-lg font-semibold">
                          {item.event}
                        </p>
                      </div>
                      <div className="text-cyan-400 text-2xl">→</div>
                    </div>

                    {expandedEvent === idx && (
                      <div className="mt-4 pt-4 border-t border-cyan-400/30">
                        <p className="text-gray-300">
                          Event details and additional information coming soon.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}