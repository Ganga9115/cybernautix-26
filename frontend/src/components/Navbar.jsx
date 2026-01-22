import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed top-4 left-1/4 -translate-x-1/2
        z-50 w-[50vw] 
        backdrop-blur-xl bg-white/5
        border border-white/10
        rounded-2xl
        shadow-[0_0_40px_rgba(0,209,255,0.18)]
      "
    >
      <div className="flex items-center justify-between px-6 py-4">

   {/* DESKTOP MENU */}
<div className="hidden md:flex gap-4 mx-auto relative">
  {navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        `
        relative px-4 py-2 font-mono text-sm tracking-wider
        transition-colors duration-300
        ${
          isActive
            ? "text-[#00d1ff]"
            : "text-white/70 hover:text-white"
        }
        `
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="nav-active-box"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="
                absolute inset-0
                rounded-xl
                bg-[#00d1ff]/10
                border border-[#00d1ff]/40
                shadow-[0_0_20px_rgba(0,209,255,0.5)]
                -z-10
              "
            />
          )}
          {item.name}
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
          className="md:hidden px-6 pb-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                block py-3 font-mono tracking-wider
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