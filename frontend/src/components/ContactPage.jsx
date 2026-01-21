import React, { useState } from "react"
import { Send } from "lucide-react"
import Galaxy from "./GalaxyAnimation/Galaxy"

const contactCards = [
  { title: "Address", text: (<><span>RSM Nagar, Gummidipoondi Taluk, Kavaraipettai, Tamil Nadu 601206</span></>), minH: "max-h-28", svg: (<svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cardGrad1" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse"><stop stopColor="#06b6d4" stopOpacity="0.75" /><stop offset="0.45" stopColor="#3b82f6" stopOpacity="0.65" /><stop offset="1" stopColor="#a855f7" stopOpacity="0.7" /></linearGradient><radialGradient id="innerGlow1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(70)"><stop stopColor="#06b6d4" stopOpacity="0.35" /><stop offset="0.55" stopColor="#9333ea" stopOpacity="0.18" /><stop offset="1" stopColor="#0a0118" stopOpacity="0" /></radialGradient><filter id="glow1" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="10" result="s" /><feOffset dy="6" /><feMerge><feMergeNode in="s" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><rect x="14" y="14" width="132" height="132" rx="28" fill="#0a0118" fillOpacity="0.78" filter="url(#shadow1)" /><rect x="14" y="14" width="132" height="132" rx="28" fill="url(#innerGlow1)" /><rect x="14" y="14" width="132" height="132" rx="28" stroke="url(#cardGrad1)" strokeWidth="2" filter="url(#glow1)" /><circle cx="80" cy="80" r="44" fill="none" stroke="#06b6d4" strokeOpacity="0.22" strokeWidth="2" /><circle cx="80" cy="80" r="34" fill="none" stroke="#a855f7" strokeOpacity="0.18" strokeWidth="2" /><path d="M80 42c-14 0-25 11-25 25 0 18.5 25 51 25 51s25-32.5 25-51c0-14-11-25-25-25Z" fill="#ffffff" fillOpacity="0.95" filter="url(#glow1)" /><circle cx="80" cy="67" r="10" fill="#0a0118" fillOpacity="0.9" /><circle cx="80" cy="67" r="8" fill="#06b6d4" fillOpacity="0.9" /></svg>) },
  { title: "Email", text: "cybernautix@rmkec.ac.in", minH: "min-h-20", svg: (<svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cardGrad2" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse"><stop stopColor="#06b6d4" stopOpacity="0.75" /><stop offset="0.45" stopColor="#3b82f6" stopOpacity="0.65" /><stop offset="1" stopColor="#a855f7" stopOpacity="0.7" /></linearGradient><radialGradient id="innerGlow2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(70)"><stop stopColor="#06b6d4" stopOpacity="0.35" /><stop offset="0.55" stopColor="#9333ea" stopOpacity="0.18" /><stop offset="1" stopColor="#0a0118" stopOpacity="0" /></radialGradient><filter id="glow2" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="10" result="s" /><feOffset dy="6" /><feMerge><feMergeNode in="s" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><rect x="14" y="14" width="132" height="132" rx="28" fill="#0a0118" fillOpacity="0.78" filter="url(#shadow2)" /><rect x="14" y="14" width="132" height="132" rx="28" fill="url(#innerGlow2)" /><rect x="14" y="14" width="132" height="132" rx="28" stroke="url(#cardGrad2)" strokeWidth="2" filter="url(#glow2)" /><circle cx="80" cy="80" r="44" fill="none" stroke="#06b6d4" strokeOpacity="0.22" strokeWidth="2" /><circle cx="80" cy="80" r="34" fill="none" stroke="#a855f7" strokeOpacity="0.18" strokeWidth="2" /><rect x="48" y="62" width="64" height="42" rx="10" fill="#ffffff" fillOpacity="0.95" filter="url(#glow2)" /><path d="M52 70L80 88L108 70" stroke="#0a0118" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M52 96L70 82" stroke="#0a0118" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" /><path d="M108 96L90 82" stroke="#0a0118" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" /></svg>) },
  { title: "Phone", text: "+91 XXXX-XXX-XXX", minH: "min-h-20", svg: (<svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cardGrad3" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse"><stop stopColor="#06b6d4" stopOpacity="0.75" /><stop offset="0.45" stopColor="#3b82f6" stopOpacity="0.65" /><stop offset="1" stopColor="#a855f7" stopOpacity="0.7" /></linearGradient><radialGradient id="innerGlow3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(70)"><stop stopColor="#06b6d4" stopOpacity="0.35" /><stop offset="0.55" stopColor="#9333ea" stopOpacity="0.18" /><stop offset="1" stopColor="#0a0118" stopOpacity="0" /></radialGradient><filter id="glow3" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter id="shadow3" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="10" result="s" /><feOffset dy="6" /><feMerge><feMergeNode in="s" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><rect x="14" y="14" width="132" height="132" rx="28" fill="#0a0118" fillOpacity="0.78" filter="url(#shadow3)" /><rect x="14" y="14" width="132" height="132" rx="28" fill="url(#innerGlow3)" /><rect x="14" y="14" width="132" height="132" rx="28" stroke="url(#cardGrad3)" strokeWidth="2" filter="url(#glow3)" /><circle cx="80" cy="80" r="44" fill="none" stroke="#06b6d4" strokeOpacity="0.22" strokeWidth="2" /><circle cx="80" cy="80" r="34" fill="none" stroke="#a855f7" strokeOpacity="0.18" strokeWidth="2" /><path d="M94.5 100.5C86.7 108.3 72.5 104.9 62.1 94.5C51.7 84.1 48.3 69.9 56.1 62.1L62.4 55.8C64 54.2 66.7 54.2 68.3 55.8L75.1 62.6C76.7 64.2 76.7 66.9 75.1 68.5L71.7 71.9C70.7 72.9 70.5 74.5 71.2 75.8C73.6 80.2 77.3 83.9 81.7 86.3C83 87 84.6 86.8 85.6 85.8L89 82.4C90.6 80.8 93.3 80.8 94.9 82.4L101.7 89.2C103.3 90.8 103.3 93.5 101.7 95.1L94.5 100.5Z" fill="#ffffff" fillOpacity="0.95" filter="url(#glow3)" /><path d="M88 62C92.8 63.2 96.6 67 97.8 71.8" stroke="#06b6d4" strokeOpacity="0.95" strokeWidth="4" strokeLinecap="round" /><path d="M88.5 54C96.8 55.7 103.3 62.2 105 70.5" stroke="#a855f7" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" /></svg>) },
]

const fields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your Name", rows: null },
  { label: "Email", name: "email", type: "email", placeholder: "your.email@example.com", rows: null },
  { label: "Subject", name: "subject", type: "text", placeholder: "Subject", rows: null },
  { label: "Message", name: "message", type: "textarea", placeholder: "Your message...", rows: 5 },
]

const GradientBorderInput = ({ label, name, type, value, placeholder, rows, onChange }) => {
  const commonClasses = "w-full bg-transparent border-0 rounded-2xl px-6 py-3 text-white placeholder-cyan-300/40 focus:outline-none"
  return (
    <div>
      <label className="text-cyan-300 font-semibold mb-2 ms-2 block">{label}</label>
      <div className="relative w-full rounded-2xl p-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
        <div className="relative rounded-2xl bg-bg-primary backdrop-blur-md">
          {type === "textarea" ? (<textarea name={name} value={value} onChange={onChange} required rows={rows} placeholder={placeholder} className={`${commonClasses} resize-none`} />) : (<input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder} className={commonClasses} />)}
        </div>
      </div>
    </div>
  )
}

const ContactCard = ({ title, text, minH, svg }) => {
  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-center gap-4">
        {svg}
        <div className="relative w-full rounded-2xl p-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
          <div className={`relative flex items-start flex-col justify-center rounded-2xl bg-bg-primary backdrop-blur-md px-6 py-4 md:${minH} min-h-24`}>
            <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
            <p className="text-purple-200 leading-relaxed">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })) }
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => { setFormData({ name: "", email: "", subject: "", message: "" }); setSubmitted(false) }, 3000) }

  return (
    <div className="min-h-screen bg-bg-primary relative">
      <div className="absolute inset-0 z-5 w-full h-full opacity-60">
        <Galaxy density={0.8} glowIntensity={0.4} saturation={0.5} hueShift={200} twinkleIntensity={0.2} rotationSpeed={0.05} repulsionStrength={1.5} autoCenterRepulsion={0} starSpeed={0.3} speed={0.5} />
      </div>

      <div className="relative w-full min-h-screen z-10 px-4 md:pb-0 pt-12 pb-6">
        <div className="flex w-full h-fit mt-10 items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 w-full z-50 md:flex-row md:h-full sm:max-h-[90vh] md:px-32">
              <div className="relative w-full h-full rounded-3xl p-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
                <div className="relative w-full h-full bg-bg-secondary rounded-3xl py-6 pb-4 px-10 backdrop-blur-md">
                  <h3 className="text-4xl text-center font-bold text-cyan-300 mb-4">Get In Touch</h3>
                  <p className="text-gray-300 mb-4 text-center text-lg">Have questions about CYBERNAUTICS 2026? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
                  {fields.map((field) => (<GradientBorderInput key={field.name} label={field.label} name={field.name} type={field.type} value={formData[field.name]} placeholder={field.placeholder} rows={field.rows} onChange={handleChange} />))}

                  {submitted && (<div className="bg-green-500/40 border border-green-600 rounded-2xl mt-2 px-4 py-2 text-green-600 font-semibold fade-in">✓ Message sent successfully! We'll respond within 24 hours.</div>)}

                  <div className="w-full flex justify-center mt-5">
                    <button className="group relative inline-flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-teal-400/60 via-blue-500/60 to-purple-500/60" />
                      <span className="relative z-10 flex items-center gap-2 rounded-xl bg-gray-950 px-6 py-3 font-semibold leading-6 text-white">
                        <span className="transition-transform duration-500 group-hover:translate-x-1 flex items-center gap-2">Let's get started <Send size={15} /></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-3xl p-[2px] overflow-hidden">
                <div className="absolute w-full inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
                <div className="relative bg-bg-secondary rounded-3xl px-8 py-5 backdrop-blur-md">
                  <div className="flex items-center justify-center h-10 mb-6">
                    <h3 className="text-4xl text-center font-bold text-cyan-300">Directly contact US</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    {contactCards.map((card) => (
                      <ContactCard key={card.title} title={card.title} text={card.text} minH={card.minH} svg={card.svg} />
                    ))}
                  </div>

                  <div className="relative w-full rounded-3xl p-[2px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-purple-500/80" />
                    <div className="relative w-full rounded-3xl bg-bg-primary/40 backdrop-blur-md overflow-hidden">
                      <iframe
                        className="w-full h-52 rounded-3xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin"
                        style={{ border: "4px solid black" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RMK Engineering College Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
