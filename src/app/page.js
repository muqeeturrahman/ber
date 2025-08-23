'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import TestimonialSlider from '@/components/TestimonialSlider'
import JobCard from '@/components/JobCard'
import { jobs } from '@/lib/data'
import { motion } from 'framer-motion'
import { ArrowRight, Building, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredJobs = jobs.filter(job => job.featured).slice(0, 3)

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Short Intro */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
              About <span className="text-gradient">Beecruit</span>
            </h2>
            <p className="text-lg text-gray-300">
              Beecruit is a full-service HR agency with 9+ years of hands-on experience helping companies hire, manage, and grow their people. From executive hiring to payroll outsourcing and HR operations, we deliver custom HR solutions that scale with your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fast Highlights */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Why Choose <span className="text-gradient">Beecruit</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver comprehensive HR solutions that scale with your business growth
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Full-Service HR Partner',
                description: 'Outsourced HR partner for SMEs & enterprises',
                icon: '🏢',
                gradient: 'from-yellow-400 to-amber-500'
              },
              {
                title: 'Scale Your Recruitment',
                description: 'Recruitment at scale: exec, permanent, bulk & project hiring',
                icon: '🚀',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Compliance & Payroll',
                description: 'Payroll & compliance handled end-to-end',
                icon: '📋',
                gradient: 'from-amber-500 to-yellow-600'
              },
              {
                title: 'Performance Focused',
                description: 'People-first processes and training that boost performance',
                icon: '📈',
                gradient: 'from-yellow-600 to-amber-600'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-yellow-900/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/30 rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/40 transition-colors duration-300"></div>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
              Why Choose <span className="text-gradient">Beecruit</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine industry expertise with personalized service to deliver 
              exceptional results for both employers and job seekers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our experienced HR professionals have deep industry knowledge and 
                proven track records in talent acquisition and placement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Quality Focus</h3>
              <p className="text-gray-300">
                We prioritize quality over quantity, ensuring every placement 
                is the right fit for both employer and candidate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-4">Proven Results</h3>
              <p className="text-gray-300">
                With 98% client satisfaction and thousands of successful placements, 
                our track record speaks for itself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Featured Jobs Section */}
      {/* <section className="section-padding bg-gray-50 dark:bg-black"> */}
        {/* <div className="container-custom"> */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
              Featured <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover exciting career opportunities with top companies. 
              These featured positions represent the best of what we have to offer.
            </p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/jobs"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>View All Jobs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div> */}
        {/* </div> */}
      {/* </section> */}

      {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-yellow-500 to-yellow-700 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Whether you're looking to hire top talent or find your next career opportunity, 
                we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-secondary">
                  Hire Talent
                </Link>
                {/* <Link href="/jobs" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-200">
                  Browse Jobs
                </Link> */}
              </div>
            </motion.div>
          </div>
        </section>

      <Footer />
    </main>
  )
} 