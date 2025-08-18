// Sample job data
export const jobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: {
      min: 120000,
      max: 180000,
      currency: 'USD'
    },
    description: 'We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining our web applications using React, TypeScript, and modern frontend technologies.',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern CSS frameworks',
      'Knowledge of testing frameworks',
      'Excellent communication skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      '401k matching',
      'Flexible work hours',
      'Remote work options'
    ],
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    slug: 'senior-frontend-developer',
    category: 'Engineering',
    experience: 'senior',
    remote: true,
    featured: true
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Design Studio Pro',
    location: 'New York, NY',
    type: 'full-time',
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    description: 'Join our creative team as a UX/UI Designer. You will be responsible for creating beautiful and functional user interfaces for web and mobile applications.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of user-centered design principles',
      'Experience with design systems'
    ],
    benefits: [
      'Competitive salary',
      'Health and dental insurance',
      'Professional development budget',
      'Flexible work schedule',
      'Creative work environment'
    ],
    postedDate: '2024-01-10',
    deadline: '2024-02-10',
    slug: 'ux-ui-designer',
    category: 'Design',
    experience: 'mid',
    remote: false,
    featured: true
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'Growth Marketing Co.',
    location: 'Austin, TX',
    type: 'full-time',
    salary: {
      min: 70000,
      max: 100000,
      currency: 'USD'
    },
    description: 'We are seeking a Marketing Manager to lead our digital marketing efforts and drive growth for our clients.',
    requirements: [
      '4+ years of marketing experience',
      'Experience with digital marketing tools',
      'Strong analytical skills',
      'Excellent communication abilities',
      'Team leadership experience'
    ],
    benefits: [
      'Competitive salary',
      'Performance bonuses',
      'Health insurance',
      'Remote work options',
      'Professional development'
    ],
    postedDate: '2024-01-08',
    deadline: '2024-02-08',
    slug: 'marketing-manager',
    category: 'Marketing',
    experience: 'mid',
    remote: true,
    featured: false
  }
]

// Sample services data
export const services = [
  {
    id: '1',
    title: 'Executive Search',
    description: 'Find the perfect C-level executives and senior leaders for your organization with our specialized executive search services.',
    icon: 'Users',
    features: [
      'Comprehensive candidate screening',
      'Industry-specific expertise',
      'Confidential search process',
      'Cultural fit assessment',
      'Long-term retention support'
    ],
    price: 'Custom Quote'
  },
  {
    id: '2',
    title: 'Technical Recruitment',
    description: 'Specialized recruitment for technology roles including developers, engineers, and IT professionals.',
    icon: 'Code',
    features: [
      'Technical skill assessment',
      'Portfolio review',
      'Coding challenges',
      'Technical interviews',
      'Remote hiring expertise'
    ],
    price: 'From $5,000'
  },
  {
    id: '3',
    title: 'HR Consulting',
    description: 'Strategic HR consulting to optimize your human resources processes and policies.',
    icon: 'Settings',
    features: [
      'HR process optimization',
      'Policy development',
      'Compliance guidance',
      'Performance management',
      'Employee engagement'
    ],
    price: 'From $3,000'
  },
  {
    id: '4',
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions for short-term projects and seasonal needs.',
    icon: 'Clock',
    features: [
      'Quick placement',
      'Quality screening',
      'Flexible contracts',
      'Cost-effective solutions',
      '24/7 support'
    ],
    price: 'From $2,500'
  }
]

// Sample testimonials data
export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'The HR agency helped us find exceptional talent that perfectly matched our company culture. Their executive search service was outstanding.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Design Studio Pro',
    role: 'CTO',
    content: 'We were struggling to find senior developers. This agency delivered top-tier candidates within weeks. Highly recommended!',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'Growth Marketing Co.',
    role: 'HR Director',
    content: 'Their HR consulting services transformed our recruitment process. We\'ve seen a 40% improvement in hiring efficiency.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg'
  }
]

// Sample blog posts
export const blogPosts = [
  {
    id: '1',
    title: 'The Future of Remote Work in 2024',
    excerpt: 'Explore the latest trends in remote work and how companies are adapting their hiring strategies.',
    content: 'Remote work has become the new normal for many companies...',
    author: 'John Smith',
    publishedDate: '2024-01-15',
    tags: ['Remote Work', 'HR Trends', 'Workplace'],
    slug: 'future-of-remote-work-2024',
    featuredImage: '/images/blog/remote-work.jpg'
  },
  {
    id: '2',
    title: 'How to Build a Strong Company Culture',
    excerpt: 'Learn the key strategies for creating and maintaining a positive company culture that attracts top talent.',
    content: 'Company culture is more than just office perks...',
    author: 'Lisa Wang',
    publishedDate: '2024-01-10',
    tags: ['Company Culture', 'Leadership', 'HR'],
    slug: 'build-strong-company-culture',
    featuredImage: '/images/blog/company-culture.jpg'
  }
]

// Company information
export const companyInfo = {
  name: 'Beecruit HR Agency',
  tagline: 'Empowering Companies. Elevating Careers.',
  description: 'We bridge the gap between top talent and ambitious employers, providing comprehensive HR solutions for modern businesses.',
  contact: {
    email: 'hello@Beecruit.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, San Francisco, CA 94105'
  },
  social: {
    linkedin: 'https://linkedin.com/company/Beecruit',
    twitter: 'https://twitter.com/Beecruit',
    facebook: 'https://facebook.com/Beecruit'
  }
} 