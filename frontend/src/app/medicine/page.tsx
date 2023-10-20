"use client"
import React from 'react'
import Medicine from '@/components/Medicine'
import Container from '@/components/Container'
import { useSession } from 'next-auth/react'
const Page = () => {
    const { data: session } = useSession();
    return (
    <Container className="flex h-[90vh] justify-center items-center">
    {
        session && (
            <Medicine/>
        )
    }
    </Container>
  )
}

export default Page