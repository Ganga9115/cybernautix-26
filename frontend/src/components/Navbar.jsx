import { NavLink } from "react-router-dom"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Rules", path: "/rules" },
  { name: "Timeline", path: "/timeline" },
  { name: "Bus Route", path: "/bus" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const navRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 120, damping: 20 })
  const springY = useSpring(y, { stiffness: 120, damping: 20 })

  const handleMouseMove = (e) => {
    if (!navRef.current) return
    const rect = navRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - 40)
    y.set(e.clientY - rect.top - 40)
  }

  const mobileItems = [
    { name: "Home", path: "/", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" /></svg> },
    { name: "Events", path: "/events", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" /></svg> },
    { name: "Rules", path: "/rules", icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5zm5.354-4.146 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" /></svg> },
    { name: "Timeline", path: "/timeline", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" /></svg> },
    { name: "Bus", path: "/bus", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6-1a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3"/><path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1"/></svg> },
    { name: "Contact", path: "/contact", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" /></svg> },
  ]

  return (
    <>
      {/* DESKTOP NAV: Perfectly Centered */}
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          hidden md:flex 
          fixed top-6 left-1/2 
          z-[100] w-auto items-center justify-center
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-2xl
          px-8 py-2
          shadow-[0_0_40px_rgba(124,124,255,0.15)]
        "
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-[#7C7CFF]/20 blur-2xl pointer-events-none"
          style={{ x: springX, y: springY }}
        />

        <div className="relative flex gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-2 font-mono text-sm font-bold tracking-widest transition-all duration-300
                ${isActive ? "text-[#7C7CFF]" : "text-white/60 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-signal"
                      className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-gradient-to-r from-transparent via-[#7C7CFF] to-transparent shadow-[0_0_12px_rgba(124,124,255,1)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </motion.nav>

      {/* MOBILE NAV: Visible only on small screens */}
      <div className="md:hidden">
        <div className="mobileBottomNav">
          {mobileItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `mobileNavItem ${isActive ? "active" : ""}`}
            >
              <div className="mobileNavInner">
                <div className="mobileNavIcon">{item.icon}</div>
                <span className="mobileNavText">{item.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}