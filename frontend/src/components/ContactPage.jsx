import React, { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .slide-in-left { animation: slideInLeft 0.6s ease-out forwards; }
        .slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
        .fade-in { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>

      <div className="container fixed inset-0 z-0 pointer-events-none">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      <div className="sticky top-0 z-40 bg-bg-secondary/10 backdrop-blur-sm border-b border-cyan-400/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-cyan-400 hover:text-cyan-300 transition font-semibold"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-white">CONTACT US</h2>
          <div className="w-24" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="slide-in-right relative flex items-center justify-center f ">
            <div className="fixed -top-24 right-0"><img src="src\assets\ChatGPT Image Jan 21, 2026, 10_37_16 AM.png" alt="" className="max-w-max" /></div>
            <form onSubmit={handleSubmit} className="space-y-3 w-full bg-purple-900/70 rounded-3xl py-6 px-10 z-50 md:absolute md:left-full md:top-10 max-h-[75vh] sm:max-h-[90vh] overflow-y-auto no-scrollbar">
            <h3 className="text-4xl font-bold text-cyan-300 mb-8">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Have questions about CYBERNAUTICS 2026? We'd love to hear from you.
              Send us a message and we'll respond within 24 hours.
            </p>
              <div>
                <label className="text-white font-semibold mb-2 ms-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-secondary/20 border border-white rounded-2xl px-6 py-3 text-white placeholder-cyan-300/40 focus:border-cyan-400 focus:outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-cyan-300 font-semibold mb-2 ms-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-secondary/20 border border-cyan-300 rounded-2xl px-6 py-3 text-white placeholder-cyan-300/40 focus:border-cyan-400 focus:outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="text-cyan-300 font-semibold mb-2 ms-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg-secondary/20 border border-cyan-300 rounded-2xl px-6 py-3 text-white placeholder-cyan-300/40 focus:border-cyan-400 focus:outline-none transition"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="text-cyan-300 font-semibold mb-2 ms-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-bg-secondary/20 border border-cyan-300 rounded-2xl px-6 py-3 text-white placeholder-cyan-300/40 focus:border-cyan-400 focus:outline-none transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              {submitted && (
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-green-300 font-semibold fade-in">
                  ✓ Message sent successfully! We'll respond within 24 hours.
                </div>
              )}

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition">
                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      Address
                    </h4>
                    <p className="text-gray-300">
                      RSM Nagar, Gummidipoondi Taluk,
                      <br />
                      Kavaraipettai, Tamil Nadu 601206
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition">
                <div className="flex items-start gap-4">
                  <Mail
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      Email
                    </h4>
                    <p className="text-gray-300">cybernautix@rmkec.ac.in</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition">
                <div className="flex items-start gap-4">
                  <Phone
                    className="text-cyan-400 flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">
                      Phone
                    </h4>
                    <p className="text-gray-300">+91 XXXX-XXX-XXX</p>
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