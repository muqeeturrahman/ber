import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, ArrowRight, Phone, Shield, TrendingUp, Award } from 'lucide-react'

export const metadata = {
  title: 'HR Retainership Packages Pakistan | Beecruit',
  description: 'Flexible HR retainers for startups to enterprises. Basic, Growth, and Premium plans with recruitment, payroll & full HR support.',
}

const plans = [
  {
    name: 'Essential',
    price: 'PKR 60,000 – 80,000',
    period: 'per month',
    for: 'Startups & small businesses requiring foundational HR support',
    icon: Shield,
    features: [
      'HR consultation (10 hours monthly)',
      'Dedicated HR consultant (remote)',
      'Recruitment support (4 positions monthly)',
      'HR policy development',
      'Employee onboarding process',
      'Labor law compliance guidance',
    ],
  },
  {
    name: 'Professional',
    price: 'PKR 120,000 – 150,000',
    period: 'per month',
    for: 'Growing companies establishing comprehensive HR infrastructure',
    icon: TrendingUp,
    recommended: true,
    features: [
      'HR consultation (25 hours monthly)',
      'Dedicated HR manager (hybrid support)',
      'Recruitment support (6 positions monthly)',
      'Complete employee lifecycle management',
      'Payroll implementation & advisory',
      'Quarterly engagement assessments',
      'Professional training (quarterly)',
      'Performance management systems',
    ],
  },
  {
    name: 'Enterprise',
    price: 'PKR 200,000 – 250,000',
    period: 'per month',
    for: 'Established organizations requiring strategic HR partnership',
    icon: Award,
    features: [
      'Unlimited HR consultation & support',
      'Senior HR manager (on-site & remote)',
      'Unlimited recruitment support',
      'End-to-end employee lifecycle management',
      'Full payroll management & compliance',
      'Monthly engagement initiatives',
      'Professional development (bi-monthly)',
      'Strategic performance management',
      'Executive leadership advisory',
    ],
  },
]

export default function PackagesPakistanPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='20,2 35,12 35,28 20,38 5,28 5,12' fill='%23F59E0B'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <span className="text-amber-400 text-sm font-medium">Pakistan Market</span>
          </div>
          
          <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-white leading-tight">
            HR Retainership
            <span className="block text-amber-400">Solutions</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic HR partnerships designed for sustainable business growth. 
            Professional expertise, proven methodologies, measurable outcomes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#packages" 
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
            >
              View Packages
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
              <Phone className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-gray-400 mt-1">Companies Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">98%</div>
              <div className="text-gray-400 mt-1">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-gray-400 mt-1">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Partnership Level
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Scalable HR solutions tailored to your business stage and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={plan.name} 
                  className={`relative bg-gray-800 rounded-xl border-2 p-8 transition-all duration-200 hover:border-amber-500/50 ${
                    plan.recommended 
                      ? 'border-amber-500 ring-1 ring-amber-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 ${
                      plan.recommended ? 'bg-amber-500/20' : 'bg-gray-700'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        plan.recommended ? 'text-amber-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-amber-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2 leading-relaxed">{plan.for}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a 
                      href="/contact" 
                      className={`block w-full py-3 text-center font-semibold rounded-lg transition-colors duration-200 ${
                        plan.recommended
                          ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
                          : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                    >
                      Get Started
                    </a>
                    {/* <a 
                      href="/contact" 
                      className="block w-full py-3 text-center font-medium text-amber-400 border border-amber-500/30 hover:border-amber-500/50 rounded-lg transition-colors duration-200"
                    >
                      Learn More
                    </a> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Services */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            International Expansion Support
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Comprehensive HR retainership services available across UAE and United States markets. 
            Full regulatory compliance, currency management, and localized expertise included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 hover:border-amber-400 text-gray-300 hover:text-amber-400 font-semibold rounded-lg transition-colors duration-200"
            >
              Compare All Markets
            </a> */}
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
            >
              Schedule Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}