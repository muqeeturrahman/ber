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
    <main className="min-h-screen overflow-hidden bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 leading-tight">
              Comprehensive <span className="text-white">HR Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
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
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Our <span className="text-white">Services</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
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
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-black">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-white mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Key Outcomes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.outcomes.map((outcome, idx) => (
                          <span key={idx} className="px-3 py-1 bg-yellow-100 text-yellow-900 text-sm rounded-full">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-900/30">
                    <h4 className="font-semibold text-yellow-400 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white">{feature}</span>
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
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              Technology & <span className="text-white">Tools We Use</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
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
                className="bg-gray-900 p-6 rounded-xl shadow-sm border border-yellow-900/30 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <span className="font-medium text-white">{tool}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Our Proven <span className="text-white">Process</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
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
                  <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto text-black group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-4 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  {step.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Why Choose <span className="text-white">Beecruit</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
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
                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-900/30 hover:border-yellow-400 h-full group-hover:translate-y-[-4px]">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yellow-400 text-black group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">{item.title}</h3>
                  <p className="text-white leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FEC714' }}>
        {/* Subtle hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,5 50,17 50,43 30,55 10,43 10,17' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-black">
              Ready to Transform Your <span className="text-gray-800">HR Operations?</span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-black/80">
              Let's discuss how our comprehensive HR solutions can streamline your operations, 
              reduce costs, and accelerate your business growth across all markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="group bg-black hover:bg-gray-900 text-yellow-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link 
                href="/careers" 
                className="group bg-transparent border-2 border-black hover:bg-black text-black hover:text-yellow-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <span>Join Our Talent Network</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-black/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-black/10 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-black/20 rounded-full"></div>
        <div className="absolute top-1/4 right-32 w-3 h-3 bg-black/15 rounded-full"></div>
      </section>

      <Footer />
    </main>
  )
}