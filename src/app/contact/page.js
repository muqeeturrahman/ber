import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Beecruit | Book a Free HR Consultation',
  description: 'Talk to our HR experts. Outsourced HR, recruitment, payroll & training for SMEs and enterprises in Pakistan & UAE.',
  keywords: ['contact', 'HR agency Pakistan', 'HR agency UAE', 'outsourced HR consultation'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
} 