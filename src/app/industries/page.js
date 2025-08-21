import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Cpu, ShoppingCart, Stethoscope, Banknote, GraduationCap, Package, Globe, Palette } from 'lucide-react'

export const metadata = {
  title: 'Industries We Serve | Beecruit HR Agency',
  description: 'Tailored HR solutions for tech, retail, healthcare, finance, education, manufacturing, NGOs, and creative agencies.',
}

const industries = [
  {
    title: 'Technology & Startups',
    description: 'Agile org design, rapid hiring, and cost-efficient outsourced HR to support product sprints and scale-ups.',
    icon: Cpu,
  },
  {
    title: 'Retail & E-commerce',
    description: 'Recruitment solutions for store ops, warehousing, CX, and digital marketing; attendance and shift compliance.',
    icon: ShoppingCart,
  },
  {
    title: 'Healthcare',
    description: 'Credentialing support, policy SOPs, and compliance-first HR for hospitals, clinics, and pharma.',
    icon: Stethoscope,
  },
  {
    title: 'Finance & Insurance',
    description: 'Payroll outsourcing and risk-aware people operations aligned with regulatory frameworks.',
    icon: Banknote,
  },
  {
    title: 'Education',
    description: 'Teacher/faculty recruiting, onboarding, and training programs for schools, universities, and edtech.',
    icon: GraduationCap,
  },
  {
    title: 'Manufacturing',
    description: 'Bulk hiring, shift planning, performance systems, and HSE-aligned HR SOPs.',
    icon: Package,
  },
  {
    title: 'NGOs & Social Enterprises',
    description: 'Cost-efficient HR outsourcing with governance, policy controls, and grant-aligned reporting.',
    icon: Globe,
  },
  {
    title: 'Creative & Digital Agencies',
    description: 'Flexible workforce models, role benchmarking, and people management solutions that protect margins.',
    icon: Palette,
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-200/40 blur-3xl"></div>
        <div className="container-custom text-center relative">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-white/70 border border-gray-200 text-gray-700">Tailored by sector</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Industries We Serve</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">People-first HR systems for tech, retail, healthcare, finance, education, manufacturing, NGOs, and creative teams.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div key={item.title} className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center ring-1 ring-primary-100">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-2 mx-6 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <p className="text-gray-700">Looking for a sector-specific HR solution in Karachi, Lahore, Islamabad, Dubai, or Abu Dhabi?</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-outline">Explore Services</a>
            <a href="/contact" className="btn-primary">Request a Proposal</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


