'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, Building, TrendingUp, Clock, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for People',
      description: 'We genuinely care about the success and happiness of both our clients and candidates.',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive business growth and career advancement.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from candidate screening to client service.',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients and candidates to ensure the perfect match every time.',
      gradient: 'from-yellow-600 to-amber-600'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years in HR and recruitment, Sarah leads our mission to connect exceptional talent with outstanding opportunities.',
      image: '/images/team/sarah.jpg',
      stats: '15+ Years Experience'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technical Recruitment',
      bio: 'Michael specializes in technology recruitment, bringing deep industry knowledge and a vast network of tech professionals.',
      image: '/images/team/michael.jpg',
      stats: '500+ Tech Placements'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior HR Consultant',
      bio: 'Emily helps organizations optimize their HR processes and build strong, inclusive workplace cultures.',
      image: '/images/team/emily.jpg',
      stats: '200+ HR Projects'
    }
  ]

  const achievements = [
    {
      icon: Building,
      title: '500+',
      subtitle: 'Companies Served',
      description: 'From startups to Fortune 500 companies'
    },
    {
      icon: Users,
      title: '10K+',
      subtitle: 'Successful Placements',
      description: 'Across all industries and roles'
    },
    {
      icon: TrendingUp,
      title: '98%',
      subtitle: 'Client Satisfaction',
      description: 'Consistently high satisfaction rates'
    },
    {
      icon: Clock,
      title: '15+',
      subtitle: 'Years Experience',
      description: 'Deep industry expertise and insights'
    }
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6">
              About <span className="text-gradient">Beecruit</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're a human-centered HR agency delivering strategy-to-execution support—tailored to your culture, goals, and growth stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                To empower businesses through smart, scalable, and human-centered HR solutions—built with integrity, driven by results, and delivered with care.
              </p>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the go-to HR partner for organizations that value people as their greatest asset.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-900/30 shadow-xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Who We Are</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Strategy-to-execution HR support for all growth stages</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">People-first processes that improve outcomes</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Tailored to your culture and goals</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">Proven track record across Pakistan & UAE markets</span>
                  </li>
                </ul>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400/10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrity • Results-Driven • People-Focused — practical HR that respects your culture and improves outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
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

      {/* Team Section */}
      <section className="section-padding bg-black" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional 
              results and building lasting partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-yellow-900/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Avatar */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-black" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400/80 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                      <span className="text-yellow-400 text-sm font-medium">{member.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-500 to-yellow-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that tell the story of our success and the value we bring to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                    {achievement.title}
                  </div>
                  <div className="text-lg font-semibold mb-2 opacity-90">
                    {achievement.subtitle}
                  </div>
                  <div className="text-sm opacity-75">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 