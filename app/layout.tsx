import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'
import ActiveContextProvider from '@/context/activeContext'

const roboto = Roboto(
  { 
    subsets: ['latin'],
    weight: ['400','500']
  })

export const metadata: Metadata = {
  title: 'Waqas Ayaz',
  description: 'Personal Portfolio Website of Waqas Ayaz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${roboto.className} bg-[#1a1527]` }>
        <ActiveContextProvider>
        {children}
         <Toaster position='top-center'  />
         <Footer />
        </ActiveContextProvider>

        </body>
    </html>
  )
}
