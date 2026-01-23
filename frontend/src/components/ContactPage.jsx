import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Galaxy from "./GalaxyAnimation/Galaxy"
import { TypewriterEffectSmooth } from "./ui/TypewriterEffectSmoothDemo"
import emailjs from "@emailjs/browser"


const technicalEvents = [
  { event: "HackVerse", coordinators: "Agila A & Reethu P", contact: "89252 46015, 78248 29706" },
  { event: "Paper-Mania", coordinators: "Yadhu Krishna U S", contact: "73389 29314" },
  { event: "Tech Tactics", coordinators: "Monika K", contact: "97886 06171" },
  { event: "PromptStudio", coordinators: "Sruthi Shree CK", contact: "82481 04709" },
]

const nonTechnicalEvents = [
  { event: "Hawkins Dimension", coordinators: "Jaisurya L", contact: "63828 91112" },
  { event: "PhantomX", coordinators: "Prasanth M", contact: "98945 96552" },
]

const Section = ({ title, data }) => {
  return (
    <div className="relative w-full rounded-3xl p-[2px] overflow-hidden">
      <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#0a0118] via-[#1a0b2e] to-[#0a0118] backdrop-blur-xl p-6 border border-cyan-400/20">
        <h3 className="text-3xl font-bold text-pink-400 text-center mb-6">{title}</h3>
        <div className="hidden text-center md:grid grid-cols-3 gap-3 text-cyan-300 text-sm uppercase tracking-wider mb-4 px-2">
          <div>Event</div>
          <div>Coordinators</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col gap-3">
          {data.map((row, i) => (
            <div key={i} className="relative w-full rounded-2xl p-[2px] overflow-hidden">
              <div className="relative text-center grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl bg-gradient-to-r from-[#0a0118] via-[#1a0b2e] to-[#0a0118] border-2 border-purple-700 hover:border-purple-500 backdrop-blur-md px-5 py-4">
                <div className="text-white font-sans font-semibold text-lg">{row.event}</div>
                <div className="text-purple-200 font-sans font-medium">{row.coordinators}</div>
                <div className="text-purple-200 font-sans font-semibold">{row.contact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const GradientBorderInput = ({ label, name, type, value, placeholder, rows, onChange }) => {
  const base = "w-full bg-transparent border-0 font-sans rounded-xl px-5 py-3 text-white placeholder-purple-200/40 focus:outline-none"
  return (
    <div className="space-y-2">
      <label className="text-pink-400 pl-4 font-semibold font-sans text-sm">{label}</label>
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className="relative rounded-2xl font-sans bg-gradient-to-r from-[#0a0118] via-[#1a0b2e] to-[#0a0118] border-2 border-purple-700 hover:border-purple-500 backdrop-blur-md">
          {type === "textarea" ? (
            <textarea name={name} rows={rows} value={value} onChange={onChange} placeholder={placeholder} className={`${base} resize-none`} required />
          ) : (
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={base} required />
          )}
        </div>
      </div>
    </div>
  )
}

const InfoCard = ({ title, text }) => {
  return (
    <div className="relative w-full rounded-2xl p-[2px] font-sans overflow-hidden">
      <div className="relative rounded-2xl bg-gradient-to-r font-sans from-[#0a0118] via-[#1a0b2e] to-[#0a0118] border-2 border-purple-700 hover:border-purple-500 backdrop-blur-md px-6 py-4">
        <h4 className="text-purple-600 font-sans font-semibold">{title}</h4>
        <p className="text-purple-200/90 font-sans text-sm mt-1">{text}</p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
})


  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
  e.preventDefault()

const templateParams = {
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
  website_name: "Cybernautix 2026",
  time: new Date().toLocaleString(),
}


  emailjs
    .send(
      "service_96qz3wt",
      "template_31ruiaa",
      templateParams,
      "D99L6ceZ54KHNTT-X"
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text)
        alert("Query sent successfully 🚀")
        setFormData({ name: "", email: "", subject: "", message: "" })
      },
      (error) => {
        console.error("Email error:", error.text)
        alert("Failed to send query ❌ Try again")
      }
    )
}

  const contactWords = [
    { text: "Get", className: "text-pink-light page-title" },
    { text: "In", className: "text-pink-light page-title" },
    { text: "Touch", className: "text-pink-light page-title" },
  ]

  return (
    <div className="min-h-screen bg-bg-primary font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 font-sans opacity-60">
        <Galaxy density={0.8} glowIntensity={0.4} saturation={0.5} hueShift={200} twinkleIntensity={0.2} rotationSpeed={0.05} />
      </div>

      <div className="flex flex-col items-center  justify-center p-0">
        <div className="relative pt-24 z-10 container mx-auto px-4 py-16 flex flex-col">
          <TypewriterEffectSmooth words={contactWords} className="justify-center font-sans" cursorClassName="text-pink-light" />

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 font-sans max-w-6xl mx-auto w-full bg-bg-secondary/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-cyan-400/20">
            <div className="grid grid-cols-1 font-sans lg:grid-cols-2 gap-10">
              <form onSubmit={handleSubmit} className="font-sans space-y-6">
                <div className="border-l-4 border-pink-400 pl-4 ml-4">
                  <h2 className="text-xl font-sans font-semibold text-pink-400">Send us a Message</h2>
                  <p className="text-sm font-sans text-gray-400">We’ll reply within 24 hours</p>
                </div>

                <GradientBorderInput label="Name" name="name" type="text" value={formData.name} placeholder="Your Name" onChange={handleChange} />
                <GradientBorderInput label="Email" name="email" type="email" value={formData.email} placeholder="your@email.com" onChange={handleChange} />
                <GradientBorderInput label="Subject" name="subject" type="text" value={formData.subject} placeholder="Subject" onChange={handleChange} />
                <GradientBorderInput label="Message" name="message" type="textarea" rows={4} value={formData.message} placeholder="Your message..." onChange={handleChange} />

                <div className="flex items-center justify-center w-full">
                  
            <button
              onClick={() => navigate("/events")}
              className="
                relative px-8 py-3 rounded-xl
                bg-black
                flex items-center gap-3
                border border-purple-500
                text-white font-semibold
                shadow-[0_0_6px_2px_rgba(168,85,247,0.25)]
                transition-all duration-300 ease-out
                hover:shadow-[0_0_36px_10px_rgba(168,85,247,0.95)]
                hover:border-purple-400
                font-sans
              "
            >
              Send Message 
              <Send size={16}/>
            </button>
          
                </div>
              </form>

              <div className="space-y-6">
                <div className="border-l-4 border-pink-400 pl-4 mt-2 mb-10 ml-4">
                  <h2 className="text-xl font-semibold font-sans text-pink-400">Contact Information</h2>
                  <p className="text-sm font-sans text-gray-400">Reach us directly</p>
                </div>

                <InfoCard title="Address" text="RSM Nagar, Gummidipoondi Taluk, Kavaraipettai, Tamil Nadu 601206" />
                <InfoCard title="Email" text="cybernautixhelpdesk@gmail.com" />

                <div className="mt-2 font-sans rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all">
                  <a href="https://www.google.co.in/maps/place/R.M.K.+Engineering+College/@13.3566859,80.1413034,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d807de229f987:0x11cc13e2927bfabc!8m2!3d13.3566859!4d80.1413034!16zL20vMGM1dmd4?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block relative group">
                    <div className="absolute inset-0 bg-green-500/0 font-sans group-hover:bg-green-500/5 transition-all z-10" />
                    <iframe className="w-full h-64 lg:h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621356!2d80.13872847492559!3d13.356691106318891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin" style={{ border: "none" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="RMK Engineering College Location" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                      <span className="text-purple-950 text-xs md:text-sm font-extrabold">Click to open in Google Maps →</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 pt-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto w-full bg-bg-secondary/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-cyan-400/20">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold font-sans text-pink-light">Event Coordinators Contact</h2>
              <p className="text-purple-200 font-sans mt-2">Technical & Non-Technical Event Coordinators</p>
            </div>

            <div className="flex flex-col font-sans gap-10">
              <Section className="font-sans" title="Technical Events" data={technicalEvents} />
              <Section className="font-sans" title="Non-Technical Events" data={nonTechnicalEvents} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}