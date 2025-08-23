'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, MapPin, Briefcase, Linkedin, CheckCircle, Star, Users, Globe } from 'lucide-react'

export default function CareersForm() {
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setIsSubmitting(false)
    e.target.reset()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-8 shadow-xl"
        >
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2">Full Name *</label>
              <input 
                required 
                type="text" 
                className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                placeholder="Your full name" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">Email *</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">Phone / WhatsApp *</label>
                <input 
                  required 
                  type="tel" 
                  className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                  placeholder="03xx xxxxxxx" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Current Location & Willing to Relocate?
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                  placeholder="Karachi — open to Lahore" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Years of Experience & Key Skills
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                  placeholder="5+ years — HR Ops, Payroll, ATS" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload CV (PDF/DOC, max 10MB) *
              </label>
              <input 
                required 
                type="file" 
                accept=".pdf,.doc,.docx" 
                className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-yellow-400 file:text-black hover:file:bg-yellow-300 transition-colors duration-300" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2 flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn URL (optional)
              </label>
              <input 
                type="url" 
                className="w-full px-4 py-3 bg-black border border-yellow-900/30 rounded-lg text-gray-100 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors duration-300" 
                placeholder="https://www.linkedin.com/in/username" 
              />
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thanks! Your profile has been submitted. We'll be in touch for relevant roles.</span>
              </motion.div>
            )}

            <p className="text-sm text-gray-400">By submitting, you consent to our privacy policy and data processing for recruitment.</p>

            <button 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        </motion.div>
      </div>
      
      <aside className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-6 shadow-xl"
        >
          <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Why join Beecruit's network?
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Access to exclusive roles across Pakistan & UAE</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>One profile, multiple opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Guidance on resumes and interviews</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-6 shadow-xl"
        >
          <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Hot locations
          </h3>
          <p className="text-gray-300">Karachi • Lahore • Islamabad • Dubai • Abu Dhabi</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-yellow-400/10 to-transparent p-6"
        >
          <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Success Stories
          </h3>
          <p className="text-gray-300 text-sm">
            Join <span className="text-yellow-400 font-semibold">5000+ professionals</span> who have advanced their careers with our network.
          </p>
        </motion.div>
      </aside>
    </div>
  )
}


