import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock } from 'lucide-react';

export default function BusRoutesPage({ onNavigate }) {
  const [expandedRoute, setExpandedRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const busRoutes = [
    {
      number: '111',
      source: 'Thiruvanmiyur',
      stops: 'Thiruvanmiyur Bus Terminus (Bypass) (6.20) – Adyar Depot (6.30) – Adyar Signal (6.35) – Madhya Kailash (6.37) – Guindy Race Course (6.50) – Nehru Statue (6.52) – Kasi Theatre (6.55) – Ashok Pillar (7.00) – Vadapalani Signal (7.10) – MMDA (7.12) – Koyambedu Roundana (7.15) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '121',
      source: 'Porur',
      stops: 'Iyappan Thangal (6.35) – Porur Signal (6.45) – Valasarawakkam (6.50) – virugambakkam (6.55) – Avichi (6.58) – Natesan Nagar (7.00) – Chinmaya nagar (7.05) – Koyambedu (7.10) – Anna Nagar Depot (7.15) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '131',
      source: 'Tiruvallur',
      stops: 'Tiruvallur (6.10) – Kakkalur (6.15) – Ramapuram (6.20) – Sevvaipettai (6.25) – Veppampattu (6.30) – Thiruninravur (6.35) – Jaya College (6.40) – Pattabiram (6.50) – Hindu College (6.55) – Avadi Bus Terminus (7.00) – Thirumulaivoyal (7.05) – Ambattur Rakki (7.10) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '132',
      source: 'Ambattur',
      stops: 'Ambattur TI Cycles (7.00) – Britannia – Korattur (7.10) – Lucas –TVS (7.15) – Senthil Nagar (7.17) – College (8.10)',
      arrivalTime: '8:10 AM'
    },
    {
      number: '138',
      source: 'Avadi',
      stops: 'Avadi Depot (7.00) – Murugappa Polytechnic (7.05) – Thirumullaivoyal (7.10) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '141',
      source: 'T.Nagar',
      stops: 'T.Nagar Panagal Park (6.45 am) , Pondy Bazaar (6.50) , Vani Mahal (6.52) , Vidhyodaya School , Valluvarkottam (6.57) ,Nungabakkam PoliceStation, Sterling Road ,Choolaimedu (7.00) , Arun Hotel (7.05), Anna Arch, Roundtana (7.10), K4, Nathamuni (7.20), Senthil Nagar(7.25), College (8.00)',
      arrivalTime: '8:00 AM'
    },
    {
      number: '145',
      source: 'Kodambakkam',
      stops: 'Meenakshi College (6.50) – Mahalingapuram (6.55) – Chetpet Signal (6.55) – Ega (6.58) – Pachaiyappa\'s College (7.02) – Aminjikarai Market – Shenoy Nagar (7.10) – Chinthamani (7.12) – Nathamuni (7.20) – College (8.10)',
      arrivalTime: '8:10 AM'
    },
    {
      number: '153',
      source: 'Mogappair West',
      stops: 'Mogappair West Depot (7.00), Golden Flats (7.05), Collector Nagar Bus Stop (7.05), Padikuppam Road (7.07)- Thirumangalam, (7.10) Anna Nagar West Depot (7.20), College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '156',
      source: 'Mogappair East',
      stops: 'Mogappair East (7.00) – Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07)- Anna Nagar West Depot (7.15) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '157',
      source: 'Thiruverkadu Arch',
      stops: 'Thiruverkadu Arch (6.50) – Maduravoyal (6.55) – Nerkundram(7.00) – Thirumangalam Signal (7.05) – Blue Star (7.10) – Shanthi Colony (7.15) – Anna Nagar West Depot (7.20) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '166',
      source: 'Thiru Vi Ka Nagar',
      stops: 'Thiru Vi Ka Nagar (7.05) – Agaram (7.10) – Periyar Nagar (7.15) – Kolathur Anna Statue (7.20) – Moogambikai (7.25) – Retteri (7.30) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '172',
      source: 'Tollgate',
      stops: 'Tollgate (6.45) – Tondiarpet Bus Depot (6.50) – Maharani (6.55) – Mint (7.00) – College (8.10)',
      arrivalTime: '8:10 AM'
    },
    {
      number: '175',
      source: 'Manali Market',
      stops: 'Manali Market (7.00 am) - Mathur (7.05) – Milk Colony FG – SG (7.10) – Arul Nagar (7.15) - Moolakadai (7.25) – College (8.00).',
      arrivalTime: '8:00 AM'
    },
    {
      number: '181',
      source: 'Tiruvottiyur',
      stops: 'Rajakadai (6.35 am) – Kaladipet – Thiruvottiyur Police Station – Ellaiamman Koil (6.40) – Theradi – Vellanchetti School – Ajax (6.50) – Periyar Nagar – Wimco – Ennore Lift Gate (6.55) – Jothi Nagar (6.57) – Sathyamoorthy Nagar - MFL Corner – College (8.00).',
      arrivalTime: '8:00 AM'
    },
    {
      number: '191',
      source: 'Sunnambukulam',
      stops: 'Arambakkam (7.20) – Ramapuram (7.25) – Elavur (7.35) – IRT (7.40) – Gummidipoondi Bypass (7.45) – College (8.10).',
      arrivalTime: '8:10 AM'
    },
    {
      number: '193',
      source: 'Gummidipoondi Bazar',
      stops: 'Gummidipoondi Bazar (7.40) – Panapakkam (7.50) – College (8.10)',
      arrivalTime: '8:10 AM'
    },
  ];

  const filteredRoutes = busRoutes.filter(route =>
    route.number.includes(searchTerm) ||
    route.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-cyan-400 hover:text-cyan-300 transition font-semibold"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-white">BUS ROUTES</h2>
          <div className="w-24" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="slide-in-left mb-8">
          <h3 className="text-4xl font-bold text-cyan-300 mb-4">College Bus Routes</h3>
          <p className="text-gray-300 text-lg">
            All buses arrive at college by 8:10 AM. Choose your nearest route for convenience.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 slide-in-left" style={{ animationDelay: '0.1s' }}>
          <input
            type="text"
            placeholder="Search by bus number or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-blue-900/20 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
          />
        </div>

        {/* Bus Routes */}
        <div className="space-y-4">
          {filteredRoutes.map((route, idx) => (
            <div
              key={idx}
              className="slide-in-up bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg overflow-hidden hover:border-cyan-400/60 transition"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setExpandedRoute(expandedRoute === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-900/20 transition"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-lg">#{route.number}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{route.source}</p>
                    <div className="flex items-center gap-2 text-cyan-300 text-sm">
                      <Clock size={16} />
                      <span>Arrives: {route.arrivalTime}</span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`text-cyan-400 transition transform ${expandedRoute === idx ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>

              {expandedRoute === idx && (
                <div className="bg-black/30 border-t border-cyan-400/30 p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-cyan-300 font-bold mb-2">Complete Route</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {route.stops}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No routes found matching your search.</p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/40 rounded-lg p-6 slide-in-left" style={{ animationDelay: '0.2s' }}>
          <p className="text-cyan-300 font-semibold mb-2">📌 Important Notes:</p>
          <ul className="text-gray-300 space-y-2">
            <li>• Buses are only available on the day of the event (March 17th)</li>
            <li>• Arrival times are approximate and may vary due to traffic</li>
            <li>• All buses converge at the college campus</li>
            <li>• Report to your bus stop 15 minutes before the scheduled time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}