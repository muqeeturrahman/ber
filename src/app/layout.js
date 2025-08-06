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
    default: 'TalentBridge HR Agency - Empowering Companies. Elevating Careers.',
    template: '%s | TalentBridge HR Agency'
  },
  description: 'We bridge the gap between top talent and ambitious employers, providing comprehensive HR solutions for modern businesses.',
  keywords: ['HR agency', 'recruitment', 'talent acquisition', 'executive search', 'HR consulting', 'staffing'],
  authors: [{ name: 'TalentBridge HR Agency' }],
  creator: 'TalentBridge HR Agency',
  publisher: 'TalentBridge HR Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talentbridge.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TalentBridge HR Agency - Empowering Companies. Elevating Careers.',
    description: 'We bridge the gap between top talent and ambitious employers, providing comprehensive HR solutions for modern businesses.',
    url: 'https://talentbridge.com',
    siteName: 'TalentBridge HR Agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TalentBridge HR Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentBridge HR Agency - Empowering Companies. Elevating Careers.',
    description: 'We bridge the gap between top talent and ambitious employers, providing comprehensive HR solutions for modern businesses.',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 