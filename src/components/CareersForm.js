'use client'

import { useState } from 'react'

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
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input required type="text" className="input-field" placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input required type="email" className="input-field" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone / WhatsApp *</label>
                <input required type="tel" className="input-field" placeholder="03xx xxxxxxx" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Location & Willing to Relocate?</label>
                <input type="text" className="input-field" placeholder="Karachi — open to Lahore" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience & Key Skills</label>
                <input type="text" className="input-field" placeholder="5+ years — HR Ops, Payroll, ATS" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload CV (PDF/DOC, max 10MB) *</label>
              <input required type="file" accept=".pdf,.doc,.docx" className="input-field" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL (optional)</label>
              <input type="url" className="input-field" placeholder="https://www.linkedin.com/in/username" />
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                Thanks! Your profile has been submitted. We’ll be in touch for relevant roles.
              </div>
            )}

            <p className="text-sm text-gray-600">By submitting, you consent to our privacy policy and data processing for recruitment.</p>

            <button disabled={isSubmitting} className="btn-primary w-full">{isSubmitting ? 'Submitting…' : 'Submit'}</button>
          </form>
        </div>
      </div>
      <aside className="space-y-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Why join Beecruit’s network?</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>• Access to exclusive roles across Pakistan & UAE</li>
            <li>• One profile, multiple opportunities</li>
            <li>• Guidance on resumes and interviews</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Hot locations</h3>
          <p className="mt-2 text-gray-700">Karachi • Lahore • Islamabad • Dubai • Abu Dhabi</p>
        </div>
      </aside>
    </div>
  )
}


