'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CareersForm from '@/components/CareersForm'
import { motion } from 'framer-motion'
import { Zap, Users, Shield, ArrowRight, CheckCircle, Clock, Target, Award } from 'lucide-react'

export default function CareersPage() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast-Track Placement',
      description: 'Our streamlined process and strong industry connections mean faster placements and quicker career advancement for qualified candidates.',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Users,
      title: 'Personalized Matching',
      description: "We don't just match skills - we match values, culture, and career aspirations to ensure long-term success for both parties.",
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Career Guidance',
      description: 'Beyond placement, we provide ongoing career counseling, interview preparation, and professional development support.',
      gradient: 'from-amber-500 to-yellow-600'
    }
  ]

  const processSteps = [
              {
                step: "01",
                title: "Submit Your CV",
      description: "Upload your resume and tell us about your career goals and preferences.",
      icon: "📄"
              },
              {
                step: "02", 
                title: "Profile Review",
      description: "Our experts review your profile and identify the best matching opportunities.",
      icon: "🔍"
              },
              {
                step: "03",
                title: "Interview Process",
      description: "We coordinate interviews and provide preparation support to maximize your success.",
      icon: "🤝"
              },
              {
                step: "04",
                title: "Placement & Support",
      description: "We facilitate the placement and provide ongoing support during your transition.",
      icon: "🎯"
    }
  ]

  const faqs = [
              {
                question: "How long does the placement process typically take?",
                answer: "The timeline varies depending on your field and seniority level. For most positions, we aim to present suitable opportunities within 2-4 weeks of receiving your CV. Senior executive roles may take longer due to their specialized nature."
              },
              {
                question: "Do I need to pay any fees as a candidate?",
                answer: "No, our services are completely free for job seekers. We are compensated by our client companies when we successfully place candidates."
              },
              {
                question: "Will my current employer know I'm looking for new opportunities?",
                answer: "Absolutely not. We maintain strict confidentiality throughout the process. Your current employer will only be contacted if you explicitly give us permission to do so."
              },
              {
                question: "What types of positions do you typically fill?",
                answer: "We work across all experience levels, from fresh graduates to C-suite executives. Our focus areas include technology, finance, healthcare, engineering, marketing, and operations roles."
              }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-500/5"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
              Join the <span className="text-gradient">Beecruit</span> Network
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We connect exceptional talent with outstanding opportunities across Pakistan, UAE, and globally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>5000+ Professionals Placed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>200+ Partner Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Why Top Professionals Choose <span className="text-gradient">Beecruit</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're more than just a recruitment agency - we're your career partners committed to your professional growth
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-yellow-900/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/30 rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/40 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From CV submission to job placement, we make the process transparent and efficient
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative group"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-yellow-400/30 to-transparent transform translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who have advanced their careers with Beecruit. Upload your CV today and let us connect you with your dream opportunity.
            </p>
            
            {/* Benefits reminder */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>No Fees for Candidates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Target className="w-4 h-4 text-yellow-400" />
                <span>Expert Career Guidance</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-900/30 shadow-xl"
          >
            <CareersForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <details className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 shadow-lg border border-yellow-900/30 hover:border-yellow-400/50 transition-all duration-300 group">
                  <summary className="font-semibold text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors flex items-center justify-between">
                    <span>{faq.question}</span>
                    <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform duration-300" />
                </summary>
                  <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
              </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
