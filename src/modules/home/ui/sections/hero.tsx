import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const Hero = () => {
    return (
        <section className='relative h-screen text-center'>
            {/* Video Background */}
            <video
                className='absolute inset-0 w-full h-full object-cover'
                src='https://affa-assets.s3.ap-southeast-2.amazonaws.com/videos/Oman+Gift+of+Life+VO.mp4'
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/50' />

            {/* Content */}
            <div className='relative h-full flex flex-col justify-center items-center text-white space-y-3'>

                <h1 className='heading-1'>AFFA</h1>
                <h2 className='heading-2'>Arab Film Festival of Australia</h2>
                <p className='body-text-lg'>A premier cultural platform dedicated to showcasing Malaysian cinema and celebrating the richness of contemporary narratives.</p>
                <div className='flex flex-col md:flex-row gap-2'>
                    <Button asChild variant='secondary'>
                        <Link href="/programs">
                            Explore Program
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/join-us">
                            Become a Member
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;