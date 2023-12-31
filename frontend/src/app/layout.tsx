import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import home from '@/../../public/home.jpg'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className}`}>
        <Layout>
          {/* header */}
          <Header/>
          {children}
          {/* footer */}
          <Footer/>
        </Layout>
        </body>
    </html>
  )
}
