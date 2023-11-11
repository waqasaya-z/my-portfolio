import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto(
  { 
    subsets: ['latin'],
    weight: ['400','500']
  })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#1a1527]` }>
        {children}
         <Toaster position='top-center'  />
        </body>
    </html>
  )
}
