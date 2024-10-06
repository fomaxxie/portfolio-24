import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { sendEmail } from './EmailService';

function Portfolio({ children }) {
  const [cursorTrail, setCursorTrail] = useState([])

  useEffect(() => {
    const updateCursorTrail = (e) => {
      setCursorTrail((prevTrail) => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prevTrail.slice(0, 5),
      ])
    }

    window.addEventListener('mousemove', updateCursorTrail)

    return () => {
      window.removeEventListener('mousemove', updateCursorTrail)
    }
  }, [])

  const projects = [
    "Currently exploring chatbots, voicebots, workflow automation, and other AI solutions for businesses",
    "Automation of the profit tracking process for my ecommerce store integrating Shopify API into Google Sheets",
    "pdf to jpg / jpg to pdf converter - implemented in a day with ChatGPT",
    "https://fancytodolist.xyz/ - implemented in React, using V0 and ChatGPT",
    "AI_Apply: A web app that helps users generate AI-powered cover letters and resume summaries. Implemented with ruby on rails and javascript, includes OpenAI and Stripe APIs, and hosted on Render. Currently off because don't want to pay for DB and API calls.",
    "Midpoint: A flight searching platform that helps travelers find the best midpoint destinations for meeting up with friends and family. A final bootcamp project implemented in Ruby on Rails, includes integration with APIs: Mapbox, OpenAI, flight search engine, unsplash, hosted on Heroku.",
    "Created fully functional and profitable Shopify stores from scratch",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 overflow-hidden relative cursor-default">
      {/* Background Blobs */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-16 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      {cursorTrail.map((cursor, index) => (
        <motion.div
          key={cursor.id}
          className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-50"
          style={{
            left: cursor.x - 12,
            top: cursor.y - 12,
            opacity: 1 - index * 0.2,
            scale: 1 - index * 0.1,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - index * 0.2, scale: 1 - index * 0.1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      <main className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
          <img src="/photo.png" alt="photo-max-fomkin" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Max Fomkin</h1>
          <p className="text-xl text-gray-600 mb-4">AI Automation Solutions to Propel Your Business Forward</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/fomaxxie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/fomaxxie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/fomaxxie/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:fomaxxi@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
          I’m passionate about leveraging technology to drive business success.

          I specialize in developing AI-powered systems that help businesses save time and increase profitability.

          I’ve been immersed in the online space since 2020, starting with e-commerce: creating funnels, building profitable
          online stores, creating and running paid ads on Facebook and filming viral TikTok videos to drive organic traffic.
          
          Completing a bootcamp in 2023, I have gained a solid foundation in web development which allowed me to develop
          AI-powered applications and automation tools I use in my ecommerce business.

          Now, I’m fully committed to the AI field, envisioning a long-term journey of
          over a decade in this transformative industry.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Projects I have worked on in 2024</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 notebook-paper relative">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-100" style={{ backgroundImage: 'linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '100% 24px', borderLeft: '2px solid #d1d5db', paddingLeft: '20px' }}></div>
            <ul className="list-disc pl-6 relative z-10">
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  className="p-1"
                >
                  <p className="text-gray-600 text-sm font-normal">{project}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="my-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#1F64FF] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.section>

      </main>
      {children}
    </div>
  )
}

function App() {
  return (
    <Portfolio>
      {/* Your existing App content can go here */}
    </Portfolio>
  )
}

export default App
