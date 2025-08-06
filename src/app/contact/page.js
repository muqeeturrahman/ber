import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - TalentBridge HR Agency',
  description: 'Get in touch with our HR experts. We\'re here to help with your recruitment needs, job opportunities, or any questions about our services.',
  keywords: ['contact', 'HR agency contact', 'recruitment contact', 'talent acquisition contact'],
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