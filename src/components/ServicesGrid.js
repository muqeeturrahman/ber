'use client'

import { motion } from 'framer-motion'
import { Users, Code, Settings, Clock, CheckCircle } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap = {
  Users: Users,
  Code: Code,
  Settings: Settings,
  Clock: Clock
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive HR solutions tailored to your business needs. 
            From executive search to temporary staffing, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group"
              >
                <div className="card h-full p-8 hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  {service.price && (
                    <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-4">
                      {service.price}
                    </div>
                  )}

                  {/* Learn More Button */}
                  {/* <button className="text-yellow-700 dark:text-yellow-400 font-medium hover:text-yellow-800 dark:hover:text-yellow-300 transition-colors duration-200 group-hover:underline">
                    Learn More →
                  </button> */}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-yellow-900/30">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Transform Your HR Strategy?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you find the perfect talent 
              and optimize your human resources processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Started Today
              </button>
              <button className="btn-outline">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 