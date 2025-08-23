import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'Beecruit — HR Agency Pakistan & UAE | Outsourced HR',
    template: '%s | Beecruit HR Agency'
  },
  description: 'End-to-end HR outsourcing, recruitment, payroll & compliance for SMEs and enterprises in Pakistan & UAE. Smart, scalable, human-centered HR.',
  keywords: [
    'HR agency Pakistan',
    'HR agency UAE',
    'HR consultancy services',
    'outsourced HR',
    'end-to-end HR services',
    'custom HR solutions',
    'recruitment solutions Dubai',
    'executive hiring Pakistan UAE',
    'bulk hiring services',
    'payroll outsourcing UAE',
    'HR outsourcing Pakistan',
    'performance management system'
  ],
  authors: [{ name: 'Beecruit HR Agency' }],
  creator: 'Beecruit HR Agency',
  publisher: 'Beecruit HR Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Beecruit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beecruit — HR Agency Pakistan & UAE | Outsourced HR',
    description: 'End-to-end HR outsourcing, recruitment, payroll & compliance for SMEs and enterprises in Pakistan & UAE. Smart, scalable, human-centered HR.',
    url: 'https://Beecruit.com',
    siteName: 'Beecruit HR Agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beecruit HR Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beecruit — HR Agency Pakistan & UAE | Outsourced HR',
    description: 'End-to-end HR outsourcing, recruitment, payroll & compliance for SMEs and enterprises in Pakistan & UAE. Smart, scalable, human-centered HR.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`}>
      <body className={`${inter.className} antialiased bg-black text-gray-100`}>
        {children}
      </body>
    </html>
  )
} 