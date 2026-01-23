import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Rules", path: "/rules" },
  { name: "Timeline", path: "/timeline" },
  { name: "Bus Route", path: "/bus" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Cursor-follow blob motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = navRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - 40);
    y.set(e.clientY - rect.top - 40);
  };

  return (
    <motion.nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      layout
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 2.2 },
        layout: { type: "spring", stiffness: 120, damping: 20 },
      }}
      className="
        fixed top-4 left-1/4 -translate-x-1/2
        z-50 w-[50vw]
        backdrop-blur-xl bg-white/5
        border border-white/10
        rounded-2xl
        shadow-[0_0_40px_rgba(0,209,255,0.18)]
        overflow-hidden
      "
    >
      {/* CURSOR FOLLOW BLOB (DESKTOP ONLY) */}
      <motion.div
        className="
          hidden md:block
          absolute w-20 h-20 rounded-full
          bg-[#00d1ff]/25
          blur-2xl
          pointer-events-none
        "
        style={{
          x: springX,
          y: springY,
        }}
      />

      <div className="relative flex items-center justify-between px-2 py-2">
{/* DESKTOP MENU */}
<div className="hidden md:flex gap-8 text-x1 mx-auto relative">
  {navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        `
        relative px-2 py-2 font-mono text-x1 font-extrabold tracking-wider
        transition-colors duration-2s
        ${
          isActive
            ? "text-[#7C7CFF]"
            : "text-white/60 hover:text-white"
        }
        `
      }
    >
      {({ isActive }) => (
        <>
          {item.name}

          {isActive && (
            <motion.div
              layoutId="nav-signal"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 100,
              }}
              className="
                absolute left-0 right-0 -bottom-1
                h-[2.5px]
                bg-gradient-to-r
                from-transparent via-[#7b68ee] to-transparent
                shadow-[0_0_12px_rgba(124,124,255,1)]
              "
            />
          )}
        </>
      )}
    </NavLink>
  ))}
</div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00d1ff]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 pb-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                relative block py-3
                font-mono tracking-wider
                ${
                  isActive
                    ? "text-[#00d1ff]"
                    : "text-white/70 hover:text-white"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}