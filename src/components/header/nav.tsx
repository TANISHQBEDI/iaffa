'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from './nav_items'
import { Menu } from 'lucide-react'
import NavMobileMenu from './nav_mobile_menu'

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
        <div className='h-16 lg:h-20 w-full relative z-90'>
            <nav className='h-full container mx-auto flex justify-between items-center px-5 z-20'>
                <div className=''>
                    <Link href='/'>
                        AFFA
                    </Link>
                </div>
                <div>
                    <ul className='hidden lg:flex flex-row gap-3 '>
                        {
                            NAV_ITEMS.map(({ id, label, href }) => {
                                return (
                                    <li key={id}>
                                        <Button variant='link' size='lg' asChild>
                                            <Link className='text-lg font-extrabold' href={href}>{label}</Link>
                                        </Button>
                                        
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <Menu className='inline-block lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                </div>
            </nav>
            {mobileMenuOpen && <NavMobileMenu />}
        </div>
    )
}

export default Nav