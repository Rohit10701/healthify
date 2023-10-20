"use client"

import Container from "@/components/Container"
import Form from "@/components/Form"
import { useSession } from "next-auth/react"

const Page = () =>{
    const {data : session} = useSession()
    return (
        <Container className="flex h-[90vh] justify-center items-center">
            {
                session && (
                    <Form/>
                )
            }
        </Container>
    )
}
export default Page