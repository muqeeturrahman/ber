import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'HR Insights & Resources | Beecruit Blog',
  description: 'Practical guides on HR outsourcing, recruitment, payroll, and compliance for Pakistan, UAE, and global teams.',
}

const articles = [
  {
    title: 'The Complete Guide to HR Outsourcing for Pakistani SMEs',
    excerpt: 'Learn how small and medium enterprises in Pakistan can leverage HR outsourcing to reduce costs by 40% while improving compliance and employee satisfaction.',
    category: 'HR Strategy',
    readTime: '8 min read',
    publishDate: 'Dec 15, 2024',
    comingSoon: true
  },
  {
    title: 'Executive Hiring: What SMEs Should Do Differently in 2025',
    excerpt: 'The traditional executive hiring playbook doesn\'t work for growing companies. Here\'s what successful SMEs do differently when hiring senior talent.',
    category: 'Executive Search',
    readTime: '6 min read',
    publishDate: 'Dec 12, 2024',
    comingSoon: true
  },
  {
    title: 'Setting Up Payroll & Compliance in UAE: Complete Checklist',
    excerpt: 'Navigate UAE labor laws, WPS compliance, and payroll setup with this comprehensive guide for international companies expanding to the UAE.',
    category: 'Payroll & Compliance',
    readTime: '10 min read',
    publishDate: 'Dec 8, 2024',
    comingSoon: true
  },
  {
    title: 'Building Performance Management Systems That Actually Work',
    excerpt: 'Move beyond annual reviews. Learn how to implement continuous performance management that drives results and improves employee engagement.',
    category: 'Performance Management',
    readTime: '7 min read',
    publishDate: 'Dec 5, 2024',
    comingSoon: true
  },
  {
    title: 'Designing Onboarding for 30-Day Productivity',
    excerpt: 'Transform your onboarding process to get new hires productive in 30 days instead of 90 with these proven strategies and templates.',
    category: 'Employee Experience',
    readTime: '5 min read',
    publishDate: 'Dec 1, 2024',
    comingSoon: true
  },
  {
    title: 'Remote Work Policies: Legal Compliance Across Borders',
    excerpt: 'Essential legal considerations for companies managing remote teams across Pakistan, UAE, and international markets.',
    category: 'Remote Work',
    readTime: '9 min read',
    publishDate: 'Nov 28, 2024',
    comingSoon: true
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
              HR Insights & <span className="text-yellow-400">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Actionable guides for founders and HR leaders navigating Pakistan, UAE, and global markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Weekly insights from industry experts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Practical, implementation-ready guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black border-b border-yellow-900/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Get Weekly HR Insights
            </h2>
            <p className="text-gray-300 mb-8">
              Join 2,500+ HR leaders who receive actionable insights, templates, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-yellow-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-black text-gray-100"
              />
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-300">
                In-depth guides coming soon. Subscribe above to get notified when we publish.
              </p>
            </div>

            <div className="space-y-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-gray-900 border border-yellow-900/30 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                                              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-400 text-sm">{article.readTime}</span>
                        <span className="text-gray-400 text-sm">{article.publishDate}</span>
                    </div>
                                          {article.comingSoon && (
                        <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-medium rounded-full w-fit">
                          Coming Soon
                        </span>
                      )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-900/30">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Want to be the first to read our articles?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're working on comprehensive guides that will help you solve real HR challenges. 
                Subscribe to our newsletter and get notified as soon as we publish new content.
              </p>
              <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}