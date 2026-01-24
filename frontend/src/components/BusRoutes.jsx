import React, { useState, useRef } from "react"
import { ChevronDown, MapPin, Clock } from "lucide-react"
import { FaBus } from "react-icons/fa"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Galaxy from "../components/GalaxyAnimation/Galaxy"
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffectSmoothDemo"

const RoutePath = ({ stopsText }) => {
  const cleanText = (stopsText || "")
    .replace(/\.$/, "")
    .replace(/\s+/g, " ")
    .trim()

  const splitStops = (text) => {
    if (!text) return []
    if (text.includes("–") || text.includes("—")) return text.split(/\s*(?:–|—)\s*/g)
    return text.split(/\s*,\s*/g)
  }

  const stops = splitStops(cleanText)
    .map((s) => s.trim())
    .filter(Boolean)

  const parseStop = (stop) => {
    const match = stop.match(/^(.*?)(?:\s*\(([^)]+)\))?\s*$/)
    const name = (match?.[1] || stop).trim().replace(/,+$/, "")
    const time = (match?.[2] || "").trim()
    return { name, time }
  }

  const data = stops.map(parseStop)

  return (
    <div className="relative ml-2 mt-2">
      <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-30" />

      <div className="flex flex-col gap-4">
        {data.map((stop, i) => (
          <div key={i} className="relative flex items-center gap-4">
            <div className="relative z-10">
              <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border-2 ${
                i === 0 || i === data.length - 1
                  ? "bg-purple-700 border-white shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "bg-bg-primary border-pink-500"
              }`}>
                <div className={`w-2 h-2 rounded-full ${i === 0 || i === data.length - 1 ? "bg-white" : "bg-pink-500"}`} />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 transition-all">
              <p className="text-white text-sm font-semibold">{stop.name}</p>
              {stop.time && (
                <span className="text-cyan-400 text-[11px] font-bold bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                  {stop.time}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedItem = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })
  return (
    <motion.div ref={ref} initial={{ scale: 0.85, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }} transition={{ duration: 0.25, delay }}>
      {children}
    </motion.div>
  )
}

export default function BusRoutesPage() {
  const [expandedRoute, setExpandedRoute] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const busRoutes = [
    { number: "111", source: "Thiruvanmiyur", stops: "Thiruvanmiyur Bus Terminus (Bypass) (6.20) – Adyar Depot (6.30) – Adyar Signal (6.35) – Madhya Kailash (6.37) – Guindy Race Course (6.50) – Nehru Statue (6.52) – Kasi Theatre (6.55) – Ashok Pillar (7.00) – Vadapalani Signal (7.10) – MMDA (7.12) – Koyambedu Roundana (7.15) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "121", source: "Porur", stops: "Iyappan Thangal (6.35) – Porur Signal (6.45) – Valasarawakkam (6.50) – virugambakkam (6.55) – Avichi (6.58) – Natesan Nagar (7.00) – Chinmaya nagar (7.05) – Koyambedu (7.10) – Anna Nagar Depot (7.15) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "131", source: "Tiruvallur", stops: "Tiruvallur (6.10) – Kakkalur (6.15) – Ramapuram (6.20) – Sevvaipettai (6.25) – Veppampattu (6.30) – Thiruninravur (6.35) – Jaya College (6.40) – Pattabiram (6.50) – Hindu College (6.55) – Avadi Bus Terminus (7.00) – Thirumulaivoyal (7.05) – Ambattur Rakki (7.10) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "132", source: "Ambattur", stops: "Ambattur TI Cycles (7.00) – Britannia – Korattur (7.10) – Lucas –TVS (7.15) – Senthil Nagar (7.17) – College (8.10)", arrivalTime: "8:10 AM" },
    { number: "138", source: "Avadi", stops: "Avadi Depot (7.00) – Murugappa Polytechnic (7.05) – Thirumullaivoyal (7.10) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "141", source: "T.Nagar", stops: "T.Nagar Panagal Park (6.45) , Pondy Bazaar (6.50) , Vani Mahal (6.52) , Vidhyodaya School , Valluvarkottam (6.57) ,Nungabakkam PoliceStation, Sterling Road ,Choolaimedu (7.00) , Arun Hotel (7.05), Anna Arch, Roundtana (7.10), K4, Nathamuni (7.20), Senthil Nagar(7.25), College (8.00)", arrivalTime: "8:00 AM" },
    { number: "145", source: "Kodambakkam", stops: "Meenakshi College (6.50) – Mahalingapuram (6.55) – Chetpet Signal (6.55) – Ega (6.58) – Pachaiyappa's College (7.02) – Aminjikarai Market – Shenoy Nagar (7.10) – Chinthamani (7.12) – Nathamuni (7.20) – College (8.10)", arrivalTime: "8:10 AM" },
    { number: "153", source: "Mogappair West", stops: "Mogappair West Depot (7.00), Golden Flats (7.05), Collector Nagar Bus Stop (7.05), Padikuppam Road (7.07)- Thirumangalam, (7.10) Anna Nagar West Depot (7.20), College (8.10).", arrivalTime: "8:10 AM" },
    { number: "156", source: "Mogappair East", stops: "Mogappair East (7.00) – Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07)- Anna Nagar West Depot (7.15) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "157", source: "Thiruverkadu Arch", stops: "Thiruverkadu Arch (6.50) – Maduravoyal (6.55) – Nerkundram(7.00) – Thirumangalam Signal (7.05) – Blue Star (7.10) – Shanthi Colony (7.15) – Anna Nagar West Depot (7.20) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "166", source: "Thiru Vi Ka Nagar", stops: "Thiru Vi Ka Nagar (7.05) – Agaram (7.10) – Periyar Nagar (7.15) – Kolathur Anna Statue (7.20) – Moogambikai (7.25) – Retteri (7.30) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "172", source: "Tollgate", stops: "Tollgate (6.45) – Tondiarpet Bus Depot (6.50) – Maharani (6.55) – Mint (7.00) – College (8.10)", arrivalTime: "8:10 AM" },
    { number: "175", source: "Manali Market", stops: "Manali Market (7.00 am) - Mathur (7.05) – Milk Colony FG – SG (7.10) – Arul Nagar (7.15) - Moolakadai (7.25) – College (8.00).", arrivalTime: "8:00 AM" },
    { number: "181", source: "Tiruvottiyur", stops: "Rajakadai (6.35 am) – Kaladipet – Thiruvottiyur Police Station – Ellaiamman Koil (6.40) – Theradi – Vellanchetti School – Ajax (6.50) – Periyar Nagar – Wimco – Ennore Lift Gate (6.55) – Jothi Nagar (6.57) – Sathyamoorthy Nagar - MFL Corner – College (8.00).", arrivalTime: "8:00 AM" },
    { number: "191", source: "Sunnambukulam", stops: "Arambakkam (7.20) – Ramapuram (7.25) – Elavur (7.35) – IRT (7.40) – Gummidipoondi Bypass (7.45) – College (8.10).", arrivalTime: "8:10 AM" },
    { number: "193", source: "Gummidipoondi Bazar", stops: "Gummidipoondi Bazar (7.40) – Panapakkam (7.50) – College (8.10)", arrivalTime: "8:10 AM" },
  ]

  const filteredRoutes = busRoutes.filter(
    (route) =>
      route.number.includes(searchTerm) ||
      route.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.stops.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const BusWords = [
    { text: "College", className: "text-pink-light text-3xl sm:text-4xl md:text-5xl page-title" },
    { text: "Bus", className: "text-pink-light text-3xl sm:text-4xl md:text-5xl page-title" },
    { text: "Routes", className: "text-pink-light text-3xl sm:text-4xl md:text-5xl page-title" },
  ]

  const notes = [
    "Buses are only available on the day of the event",
    "Arrival times may vary due to traffic",
    "All buses converge at the college campus",
    "Report 15 minutes early at your stop",
  ]

  return (
   <div className="min-h-screen relative overflow-x-hidden bg-transparent">
      {/* <div className="absolute inset-0 z-5 w-full h-full opacity-60">
        <Galaxy density={0.8} glowIntensity={0.4} saturation={0.5} hueShift={200} twinkleIntensity={0.2} rotationSpeed={0.05} repulsionStrength={1.5} autoCenterRepulsion={0} starSpeed={0.3} speed={0.5} />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-5 md:py-20 relative z-10">
        <div className="mb-8 text-center">
          <TypewriterEffectSmooth words={BusWords} className="justify-center" cursorClassName="text-[#ec4899]" />
          <p className="text-lg font-sans" style={{ color: "#d8b4fe" }}>All buses arrive at college by 8:10 AM. Choose your nearest route for convenience.</p>
        </div>

        <div className="mb-8 font-sans">
          <input type="text" placeholder="Search by bus number or location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full rounded-lg px-4 py-3 text-white focus:outline-none font-sans focus:ring-1 transition" style={{ backgroundColor: "#1a0b2e", border: "1px solid #6b21a8" }} />
        </div>

        <div className="space-y-4 w-full font-sans relative z-10">
          {filteredRoutes.map((route, idx) => (
            <AnimatedItem className="font-sans" key={idx} delay={0.05}>
              <div className="rounded-lg overflow-hidden transition" style={{ background: "linear-gradient(135deg, #1a0b2e, #0a0118)", border: "1px solid #581c87" }}>
                <button onClick={() => setExpandedRoute(expandedRoute === idx ? null : idx)} className="w-full p-6 flex items-center font-sans justify-between transition">
                  <div className="flex items-center font-sans gap-4 text-left">
                    <div className="relative font-sans w-16 h-12 flex items-center justify-center flex-shrink-0">
                      <FaBus size={60} className="absolute" style={{ color: "#a925eb", opacity: 0.75 }} />
                      <span className="relative font-sans z-10 -translate-y-2 text-white font-bold text-sm">{route.number}</span>
                    </div>

                    <div>
                      <p className="font-bold font-sans text-lg" style={{ color: "#ffffff" }}>{route.source}</p>
                      <div className="flex items-center gap-2 font-sans text-sm" style={{ color: "#06b6d4" }}>
                        <Clock className="font-sans" size={16} />
                        <span className="font-sans">Arrives: {route.arrivalTime}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronDown size={24} className={`transition transform ${expandedRoute === idx ? "rotate-180" : ""}`} style={{ color: "#06b6d4" }} />
                </button>

                <AnimatePresence style={{ fontFamily: "sans-serif" }}>
                  {expandedRoute === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="p-6 font-sans" style={{ backgroundColor: "#0a0118", borderTop: "1px solid #6b21a8",fontFamily:"sans-serif" }}>
                      <div className="flex font-sans items-start gap-4">
                        <MapPin size={20} className="mt-1 font-sans" style={{ color: "#06b6d4" }} />
                        <div className="w-full font-sans">
                          <h4 className="font-bold font-sans mb-6" style={{ color: "#c084fc" }}>Route Timeline</h4>
                          <RoutePath className="font-sans" style={{ fontFamily: "sans-serif" }} stopsText={route.stops} />
                         
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center font-sans py-12">
            <p style={{ color: "#d8b4fe", fontFamily: "sans-serif" }}>No routes found matching your search.</p>
          </div>
        )}

        <AnimatedItem delay={0.05}>
          <div className="mt-12 pb-20 flex justify-center relative w-full font-sans rounded-2xl p-[2px] overflow-hidden">
            <div className="flex items-center justify-center font-sans flex-col max-w-fit relative rounded-2xl bg-gradient-to-r from-[#0a0118]/10 via-[#1a0b2e]/10 to-[#0a0118]/10 border border-white/10 px-6 md:px-10 py-6">
              <div className="flex items-center font-sans gap-3 mb-4">
                <h3 className="text-3xl font-bold text-pink-400">Important Notes</h3>
              </div>

              <div className="grid grid-cols-1 gap-3 w-full">
                {notes.map((note, i) => (
                  <AnimatedItem delay={0.1}>
                  <div key={i} className="flex items-center w-full gap-3 rounded-xl bg-bg-primary/50 border border-bg-secondary/40 px-6 py-3 hover:bg-bg-secondary/50 transition">
                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                    <p className="text-sm text-purple-200 font-sans font-medium leading-relaxed">{note}</p>
                  </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </div>
  )
}