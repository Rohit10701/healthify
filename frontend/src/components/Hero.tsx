import React from 'react';
import hero from '../../public/hero.png'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const Hero = () => {
    const {data: session} = useSession()
  return (
    <section className="py-20 text-black">
      <div className="container mx-auto text-center flex md:flex-row flex-col md:gap-x-20 gap-y-20 ">
        <div className='flex flex-col justify-center items-center'>
            <Image src={hero} height={500} width={500} alt='hero pic' className='rounded-full'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">Stay Informed About Your Medication</h1>
        <p className="mt-4 text-lg">
          Get timely alerts and reminders for your medications. Your health
          matters!
        </p>
        {
        session ?
        (<Link href={'/medicine'}>
        <button className="mt-8 bg-orange-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600">
          Get Started
        </button>
        </Link>) :
        (
            <Link href={'/api/auth/signin'}>
        <button className="mt-8 bg-orange-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600" >
        Login
        </button>
            </Link>
        )
        }
        </div>
      </div>
    </section>
  );
};

export default Hero;
