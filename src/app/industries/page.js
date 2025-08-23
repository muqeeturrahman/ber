import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Cpu, 
  ShoppingCart, 
  Stethoscope, 
  Banknote, 
  GraduationCap, 
  Package, 
  Heart, 
  Palette,
  ArrowRight,
  CheckCircle,
  Users,
  Target
} from 'lucide-react'

export const metadata = {
  title: 'Industries We Serve | Beecruit HR Solutions',
  description: 'Specialized HR solutions across technology, retail, healthcare, finance, education, manufacturing, NGOs, and creative industries.',
}

const industries = [
  {
    icon: Cpu,
    title: 'Technology & Startups',
    description: 'Scalable HR infrastructure designed for rapid growth, agile team building, and competitive talent acquisition in the tech ecosystem.',
    image: '/tech.jpeg',
    specialties: ['Executive Search', 'Technical Recruitment', 'Stock Option Plans', 'Remote Work Policies'],
    metrics: { placement: '95%', timeToHire: '15 days', retention: '92%' }
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Comprehensive workforce solutions for omnichannel operations, seasonal staffing, and customer experience excellence.',
    image: '/retail.jpeg',
    specialties: ['Bulk Hiring', 'Shift Management', 'Performance Tracking', 'Training Programs'],
    metrics: { placement: '98%', timeToHire: '7 days', retention: '85%' }
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Specialized recruitment and compliance-focused HR services for medical professionals and healthcare organizations.',
    image: '/health.jpeg',
    specialties: ['Medical Credentialing', 'Compliance Management', 'Continuing Education', 'Risk Management'],
    metrics: { placement: '94%', timeToHire: '21 days', retention: '96%' }
  },
  {
    icon: Banknote,
    title: 'Finance & Insurance',
    description: 'Risk-aware HR operations with regulatory compliance, competitive compensation strategies, and talent retention programs.',
    image: '/financial.jpeg',
    specialties: ['Regulatory Compliance', 'Risk Assessment', 'Executive Compensation', 'Audit Readiness'],
    metrics: { placement: '96%', timeToHire: '18 days', retention: '94%' }
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Faculty recruitment, administrative staffing, and educational technology talent acquisition for academic institutions.',
    image: '/education.jpeg',
    specialties: ['Faculty Search', 'Academic Administration', 'EdTech Talent', 'Research Support'],
    metrics: { placement: '93%', timeToHire: '25 days', retention: '96%' }
  },
  {
    icon: Package,
    title: 'Manufacturing',
    description: 'Industrial workforce management, safety compliance, and operational efficiency through strategic HR practices.',
    image: '/manufacturing.jpeg',
    specialties: ['Safety Compliance', 'Shift Planning', 'Skills Training', 'Union Relations'],
    metrics: { placement: '97%', timeToHire: '12 days', retention: '88%' }
  },
  {
    icon: Heart,
    title: 'NGOs & Social Enterprises',
    description: 'Mission-driven HR solutions with grant compliance, volunteer management, and sustainable organizational growth.',
    image: '/ngo.jpeg',
    specialties: ['Grant Compliance', 'Volunteer Programs', 'Impact Measurement', 'Donor Relations'],
    metrics: { placement: '91%', timeToHire: '20 days', retention: '89%' }
  },
  {
    icon: Palette,
    title: 'Creative & Digital Agencies',
    description: 'Flexible talent models, creative team optimization, and project-based workforce solutions for dynamic environments.',
    image: '/creative and digital.jpeg',
    specialties: ['Creative Talent', 'Project Staffing', 'Freelancer Management', 'Portfolio Assessment'],
    metrics: { placement: '92%', timeToHire: '14 days', retention: '86%' }
  }
]

const capabilities = [
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Deep understanding of sector-specific challenges, regulations, and talent requirements across diverse markets.'
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored HR strategies aligned with industry best practices and specific business objectives.'
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: 'Demonstrated success across industries with measurable business impact and exceptional client satisfaction.'
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-yellow-400 relative overflow-hidden">
        {/* Subtle hexagonal pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,5 50,17 50,43 30,55 10,43 10,17' fill='%23000000'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-black/10 border border-black/20 mb-6">
            <span className="text-black text-sm font-medium">Sector Specialization</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Industries We Serve
          </h1>
          <p className="text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
            Specialized HR solutions tailored to the unique challenges and opportunities 
            across diverse industry sectors, delivering measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Our <span className="text-white">Sector Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive HR solutions designed around the specific needs of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div 
                key={industry.title} 
                className="group bg-gray-900 rounded-xl border border-yellow-900/30 p-6 hover:shadow-2xl hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Industry Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-gray-800">
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-yellow-400">
                    {industry.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {industry.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-black/50 rounded-lg border border-yellow-900/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{industry.metrics.placement}</div>
                    <div className="text-xs text-gray-400">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{industry.metrics.timeToHire}</div>
                    <div className="text-xs text-gray-400">Avg. Hire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{industry.metrics.retention}</div>
                    <div className="text-xs text-gray-400">Retention</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-yellow-400 mb-2">Key Services:</div>
                  {industry.specialties.slice(0, 2).map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                      {specialty}
                    </div>
                  ))}
                  <div className="text-xs text-gray-500 mt-2">
                    +{industry.specialties.length - 2} more services
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Our <span className="text-white">Industry Approach</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              How we deliver specialized HR solutions across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <capability.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-y border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">8+</div>
              <div className="text-gray-300">Industry Sectors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Average Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-300">Successful Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400 relative overflow-hidden">
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
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Ready to Discuss Your <span className="text-gray-800">Industry Needs?</span>
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with our industry specialists to explore customized HR solutions 
            tailored to your sector's unique challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-black hover:bg-gray-800 text-yellow-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-1"
            >
              Schedule Industry Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-black hover:bg-black hover:text-yellow-400 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}