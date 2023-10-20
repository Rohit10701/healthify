'use client'
import Container from '@/components/Container'
import Header from '@/components/Header'
import addNotification from 'react-push-notification'
import Image from 'next/image'
import home from '../../public/home.jpg'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <Container className="flex h-[90vh] justify-center items-center">
      <Hero />
    </Container>
  )
}
