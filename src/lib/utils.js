import { clsx } from 'clsx'

// Utility function for conditional class names
export function cn(...inputs) {
  return clsx(inputs)
}

// Format date to readable string
export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format salary range
export function formatSalary(min, max, currency = 'USD') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  if (min && max) {
    return `${formatter.format(min)} - ${formatter.format(max)}`
  } else if (min) {
    return `${formatter.format(min)}+`
  } else if (max) {
    return `Up to ${formatter.format(max)}`
  }
  return 'Competitive'
}

// Generate job slug from title
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Validate email format
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Format phone number
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Debounce function for search inputs
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Get experience level color
export function getExperienceColor(level) {
  const colors = {
    entry: 'bg-green-100 text-green-800',
    mid: 'bg-blue-100 text-blue-800',
    senior: 'bg-purple-100 text-purple-800',
    executive: 'bg-red-100 text-red-800'
  }
  return colors[level] || colors.entry
}

// Get job type color
export function getJobTypeColor(type) {
  const colors = {
    'full-time': 'bg-primary-100 text-primary-800',
    'part-time': 'bg-accent-100 text-accent-800',
    'contract': 'bg-orange-100 text-orange-800',
    'internship': 'bg-purple-100 text-purple-800'
  }
  return colors[type] || colors['full-time']
}

// Calculate time ago
export function timeAgo(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`
  return `${Math.floor(diffInSeconds / 31536000)}y ago`
}

// Truncate text
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Generate random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9)
}

// Scroll to element
export function scrollToElement(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
} 