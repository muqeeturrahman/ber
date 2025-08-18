'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Executive Search', href: '/services#executive-search' },
      { name: 'Technical Recruitment', href: '/services#technical-recruitment' },
      { name: 'HR Consulting', href: '/services#hr-consulting' },
      { name: 'Temporary Staffing', href: '/services#temporary-staffing' }
    ]
  },
  // { name: 'Employers', href: '/employers' },
  // { name: 'Job Seekers', href: '/job-seekers' },
  // { name: 'Jobs', href: '/jobs' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Bee Icon */}
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Bee SVG Icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 lg:w-7 lg:h-7 text-gray-800"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 9L13.5 7.5C13.1 7.1 12.6 6.9 12 6.9S10.9 7.1 10.5 7.5L9 9L3 7V9L9 11L10.5 9.5C10.9 9.1 11.4 8.9 12 8.9S13.1 9.1 13.5 9.5L15 11L21 9ZM12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10ZM4 16C4 18.2 5.8 20 8 20S12 18.2 12 16C12 15.2 11.8 14.5 11.4 13.9L10 15.3L8.6 13.9C8.2 14.5 8 15.2 8 16H4ZM16 20C18.2 20 20 18.2 20 16H16C16 15.2 15.8 14.5 15.4 13.9L14 15.3L12.6 13.9C12.2 14.5 12 15.2 12 16C12 18.2 13.8 20 16 20Z"/>
                </svg>
              </div>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-gray-900 leading-none">
                Beecruit
              </span>
              <span className="text-xs lg:text-sm text-gray-600 font-medium leading-none">
                HR Solutions That Speak Volumes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                      {item.name}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-primary-600 transition-all duration-200 group-hover:rotate-180" />
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 hover:text-gray-900 transition-all duration-200 font-medium"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/jobs" 
              className="btn-outline hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300"
            >
              View Jobs
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Hire Talent
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 rounded-lg font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMenu}
                                  className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 hover:text-gray-800 rounded-lg transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 rounded-lg font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-3">
                <Link
                  href="/jobs"
                  onClick={closeMenu}
                  className="block w-full text-center btn-outline hover:border-yellow-400 hover:text-yellow-600"
                >
                  View Jobs
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center btn-primary bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 border-0"
                >
                  Hire Talent
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}