import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Galaxy from "./GalaxyAnimation/Galaxy"

/* -------------------- INPUT FIELD -------------------- */
const GradientBorderInput = ({ label, name, type, value, placeholder, rows, onChange }) => {
  const base =
    "w-full bg-transparent border-0 rounded-xl px-5 py-3 text-white placeholder-cyan-300/40 focus:outline-none"

  return (
    <div className="space-y-2">
      <label className="text-cyan-300 font-semibold text-sm">{label}</label>
      <div className="relative rounded-xl p-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
        <div className="relative rounded-xl bg-bg-primary backdrop-blur-md">
          {type === "textarea" ? (
            <textarea
              name={name}
              rows={rows}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`${base} resize-none`}
              required
            />
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={base}
              required
            />
          )}
        </div>
      </div>
    </div>
  )
}

/* -------------------- CONTACT PAGE -------------------- */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Galaxy
          density={0.8}
          glowIntensity={0.4}
          saturation={0.5}
          hueShift={200}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
        />
      </div>

      {/* MAIN CONTAINER (FROM FIRST DESIGN) */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col">
        <motion.h1
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-10"
        >
          Get In Touch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 max-w-6xl mx-auto w-full bg-bg-secondary/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-cyan-400/20 overflow-y-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ---------------- FORM ---------------- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h2 className="text-xl font-semibold text-cyan-300">Send us a Message</h2>
                <p className="text-sm text-gray-400">We’ll reply within 24 hours</p>
              </div>

              <GradientBorderInput
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
              />

              <GradientBorderInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                placeholder="your@email.com"
                onChange={handleChange}
              />

              <GradientBorderInput
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                placeholder="Subject"
                onChange={handleChange}
              />

              <GradientBorderInput
                label="Message"
                name="message"
                type="textarea"
                rows={4}
                value={formData.message}
                placeholder="Your message..."
                onChange={handleChange}
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              >
                <div className="rounded-xl bg-gray-950 px-6 py-3 flex items-center justify-center gap-2 text-white font-semibold">
                  Send Message <Send size={16} />
                </div>
              </motion.button>
            </form>

         {/* ---------------- CONTACT INFO ---------------- */}
<div className="space-y-6">
  <div className="border-l-4 border-cyan-400 pl-4">
    <h2 className="text-xl font-semibold text-cyan-300">
      Contact Information
    </h2>
    <p className="text-sm text-gray-400">Reach us directly</p>
  </div>

  {/* Address */}
  <div className="rounded-xl p-[2px] bg-gradient-to-br from-cyan-400/70 via-blue-500/50 to-purple-500/70">
    <div className="rounded-xl bg-bg-primary/70 backdrop-blur-md px-6 py-4">
      <h4 className="text-cyan-300 font-semibold">Address</h4>
      <p className="text-purple-200 text-sm mt-1">
        RSM Nagar, Gummidipoondi Taluk, Kavaraipettai, Tamil Nadu 601206
      </p>
    </div>
  </div>

  {/* Email */}
  <div className="rounded-xl p-[2px] bg-gradient-to-br from-cyan-400/70 via-blue-500/50 to-purple-500/70">
    <div className="rounded-xl bg-bg-primary/70 backdrop-blur-md px-6 py-4">
      <h4 className="text-cyan-300 font-semibold">Email</h4>
      <p className="text-purple-200 text-sm mt-1">
        cybernautix@rmkec.ac.in
      </p>
    </div>
  </div>
{/* Map Section */}
          <div className="mt-8 rounded-xl overflow-hidden !border !border-gray-700 hover:!border-green-500 transition-all">
            <a
              href="https://www.google.co.in/maps/place/R.M.K.+Engineering+College/@13.3566859,80.1413034,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d807de229f987:0x11cc13e2927bfabc!8m2!3d13.3566859!4d80.1413034!16zL20vMGM1dmd4?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all z-10" />
              <iframe
                className="w-full h-64 lg:h-72"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RMK Engineering College Location"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <span className="text-green-400 text-xs md:text-sm font-medium">
                  Click to open in Google Maps →
                </span>
              </div>
            </a>
          </div>
</div>
</div>
        </motion.div>
      </div>
    </div>
    
  )
}