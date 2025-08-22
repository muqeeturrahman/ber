'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Packages', href: '/packages/pakistan' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
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

  // return (
//  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//   isScrolled 
//     ? 'bg-yellow-400 shadow-lg' 
//     : 'bg-yellow-400'
// }`}>
return (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/90 dark:bg-black/95 backdrop-blur-md shadow-lg' 
      : 'bg-white dark:bg-black'
  }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 lg:h-16 w-auto">
              <Image
                src="/logo-removebg-preview.png"
                alt="Beecruit - HR Solutions That Speak Volumes"
                width={200}
                height={64}
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 dark:brightness-0 dark:invert"
                priority
              />
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
                    <span className="text-gray-800 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 font-medium">
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
                          className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-black rounded-xl shadow-xl border border-gray-100 dark:border-yellow-900/30 py-2 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 dark:hover:bg-yellow-400/10 hover:text-gray-900 dark:hover:text-yellow-300 transition-all duration-200 font-medium"
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
                    className="text-gray-800 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            {/* <Link 
              href="/jobs" 
              className="btn-outline hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300"
            >
              View Jobs
            </Link> */}
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
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
            className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-yellow-900/30"
          >
            <div className="container-custom py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 dark:hover:bg-yellow-400/10 rounded-lg font-medium"
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
                                  className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 dark:hover:bg-yellow-400/10 hover:text-gray-800 dark:hover:text-yellow-300 rounded-lg transition-all duration-200"
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
                        className="block px-4 py-3 text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 dark:hover:bg-yellow-400/10 rounded-lg font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-3">
                <ThemeToggle className="w-full" />
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