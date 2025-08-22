'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Target, 
  Shield, 
  Search, 
  Settings, 
  Calculator, 
  GraduationCap, 
  TrendingUp,
  ArrowRight,
  Award,
  Zap,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'Talent Acquisition & Recruitment',
      description: 'Permanent & contract hiring, executive search, bulk/project staffing, industry-specific sourcing.',
      outcomes: ['Faster time-to-hire', 'Better cultural fit', 'Reduced attrition rates'],
      keywords: 'HR recruitment solutions, executive hiring services, bulk hiring Pakistan UAE',
      features: [
        'Executive Search & C-Suite Placement',
        'Permanent & Contract Recruitment',
        'Bulk & Project Staffing',
        'Industry-Specific Sourcing',
        'Technical & Non-Technical Roles'
      ]
    },
    {
      icon: Settings,
      title: 'HR Operations & Advisory',
      description: 'Policies & SOPs, org structuring, performance systems, compliance & labor law guidance.',
      outcomes: ['Clear processes', 'Audit-ready documentation', 'Stronger company culture'],
      keywords: 'HR consultancy services, HR advisory UAE, HR operations Pakistan',
      features: [
        'HR Policies & SOP Development',
        'Organizational Structure Design',
        'Performance Management Systems',
        'Compliance & Labor Law Guidance',
        'HR Audit & Documentation'
      ]
    },
    {
      icon: Calculator,
      title: 'Payroll & HR Outsourcing',
      description: 'Payroll processing, benefits administration, records, leave & attendance, full HR outsourcing.',
      outcomes: ['Accurate, on-time payroll', 'Reduced admin burden', 'Better employee experience'],
      keywords: 'payroll outsourcing UAE, HR outsourcing Pakistan, HR outsourcing for startups',
      features: [
        'Complete Payroll Processing',
        'Benefits Administration',
        'Leave & Attendance Management',
        'Employee Records Management',
        'Full HR Department Outsourcing'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Onboarding, customized trainings & workshops, leadership & soft skills, skill-gap analysis.',
      outcomes: ['Productive ramp-ups', 'Stronger managers', 'Higher retention rates'],
      keywords: 'corporate training, employee onboarding UAE, leadership development',
      features: [
        'Digital & Traditional Onboarding',
        'Customized Training Programs',
        'Leadership Development',
        'Soft Skills Workshops',
        'Skills Gap Analysis'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Compensation & Benefits',
      description: 'Salary benchmarking, rewards strategy, benefits structuring, retention-focused incentives.',
      outcomes: ['Competitive offers', 'Motivated teams', 'Lower turnover'],
      keywords: 'compensation strategy UAE, employee benefits solutions',
      features: [
        'Market Salary Benchmarking',
        'Total Rewards Strategy',
        'Benefits Package Design',
        'Incentive Programs',
        'Retention-Focused Solutions'
      ]
    }
  ]

  const processSteps = [
    {
      icon: Users,
      title: 'Discovery & Planning',
      description: 'We start by understanding your specific needs, company culture, and business objectives through detailed consultation.'
    },
    {
      icon: Target,
      title: 'Strategic Implementation',
      description: 'Our experts develop and execute customized solutions using proven methodologies and industry best practices.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive evaluation and testing to ensure all deliverables meet our high standards and your requirements.'
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: 'Continuous monitoring, optimization, and support to ensure long-term success and maximum ROI.'
    }
  ]

  const tools = [
    'ATS-driven hiring pipelines',
    'Advanced payroll engines',
    'Digital onboarding platforms', 
    'HR analytics dashboards',
    'Secure document workflows',
    'Performance tracking systems'
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-yellow-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-yellow-400 mb-8 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">HR Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              From talent acquisition to complete HR outsourcing, we deliver tailored solutions that drive business growth across Pakistan, UAE, and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold py-4 px-8 rounded-xl hover:bg-yellow-500 transition-all duration-300 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end HR solutions designed to streamline operations, enhance productivity, and drive sustainable growth.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.outcomes.map((outcome, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology & <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Tools We Use</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge HR technology solutions selected to fit your size and budget, ensuring maximum efficiency and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-900">{tool}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures consistent quality, measurable results, and exceptional client satisfaction across all our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Beecruit</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative solutions to deliver exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Over 9 years of experience with 98% client satisfaction and thousands of successful placements across industries.',
                color: 'primary'
              },
              {
                icon: Zap,
                title: 'Quick Turnaround',
                description: 'Streamlined processes and extensive networks ensure you get qualified candidates and solutions faster than the competition.',
                color: 'accent'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Seasoned HR professionals with deep industry knowledge and proven track records across Pakistan, UAE, and global markets.',
                color: 'purple'
              },
              {
                icon: Target,
                title: 'Customized Approach',
                description: 'Every solution is tailored to your specific needs, culture, and business objectives for maximum impact.',
                color: 'green'
              },
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: 'We stand behind our work with comprehensive guarantees and ongoing support to ensure your long-term success.',
                color: 'orange'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Extensive network and expertise across multiple markets, from local SMEs to multinational corporations.',
                color: 'blue'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full group-hover:translate-y-[-4px]">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                    item.color === 'accent' ? 'bg-accent-100 text-accent-600' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    item.color === 'green' ? 'bg-green-100 text-green-600' :
                    item.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        </div>
        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">HR Operations?</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Let's discuss how our comprehensive HR solutions can streamline your operations, reduce costs, and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="group bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                href="/careers" 
                className="group bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Join Our Talent Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}