import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, ArrowRight, Phone } from 'lucide-react'

export const metadata = {
  title: 'HR Retainership Packages Pakistan | Beecruit',
  description: 'Flexible HR retainers for startups to enterprises. Basic, Growth, and Premium plans with recruitment, payroll & full HR support.',
}

const plans = [
  {
    name: 'Basic Retainer',
    price: 'PKR 60,000 – 80,000 / month',
    for: 'For startups & small businesses needing essential HR support.',
    features: [
      'HR consultation (up to 10 hours/month)',
      'One dedicated HR Partner (remote)',
      'Recruitment support for up to 4 roles/month',
      'Drafting of HR policies (as needed)',
      'Employee onboarding & documentation',
      'Compliance guidance (labor laws, contracts, etc.)',
    ],
  },
  {
    name: 'Growth Retainer',
    price: 'PKR 120,000 – 150,000 / month',
    for: 'For scaling companies building structured HR.',
    features: [
      'HR consultation (up to 25 hours/month)',
      'Dedicated HR Partner (remote + periodic on-site)',
      'Recruitment support for up to 6 roles/month',
      'Complete employee lifecycle management',
      'Payroll setup & advisory',
      'Quarterly employee engagement surveys',
      '1 training session / quarter',
      'Performance management framework setup',
    ],
  },
  {
    name: 'Premium Retainer',
    price: 'PKR 200,000 – 250,000 / month',
    for: 'For established companies needing end-to-end partnership.',
    features: [
      'Unlimited HR consultation & support',
      'Dedicated HR Manager (remote + on-site)',
      'Recruitment support for unlimited roles',
      'Full employee lifecycle management',
      'Payroll management & compliance handled by Beecruit',
      'Monthly employee engagement activities',
      'L&D: 2 trainings / month',
      'Performance management & KPI tracking',
      'Strategic HR advisory with leadership',
    ],
  },
]

export default function PackagesPakistanPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-10 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-200/40 blur-3xl"></div>
        <div className="container-custom text-center relative">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-white/70 border border-gray-200 text-gray-700">Pakistan Pricing</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Beecruit Retainership Packages</h1>
          <p className="mt-3 text-lg text-gray-700">HR solutions that speak volumes</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plans" className="btn-primary inline-flex items-center justify-center">Compare Plans <ArrowRight className="ml-2 w-4 h-4" /></a>
            <a href="/contact" className="btn-outline inline-flex items-center justify-center">Talk to Sales <Phone className="ml-2 w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <section id="plans" className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              </div>
              <div className="mt-2 text-primary-700 font-semibold">{plan.price}</div>
              <p className="mt-2 text-gray-600">{plan.for}</p>
              <ul className="mt-5 space-y-2 text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-1 w-4 h-4 text-green-600" /> <span>{f}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <a href="/contact" className="btn-primary flex-1">Get Started</a>
                <a href="/contact" className="btn-outline">Ask a Question</a>
              </div>
            </div>
          ))}
        </div>

        <div className="container-custom mt-10 text-center">
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="text-gray-700">UAE & US retainerships available on request. Currency conversions and local compliance included.</p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-outline">Compare Plans</a>
              <a href="/contact" className="btn-primary">Book a Discovery Call</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


