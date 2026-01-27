'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from './nav_items'
import { Menu } from 'lucide-react'
import NavMobileMenu from './nav_mobile_menu'

import { Cairo_Play } from 'next/font/google';

const cairoPlay = Cairo_Play({ subsets: ['latin'] });

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
        <div className={`h-16 lg:h-20 w-full fixed top-0 z-50 ${cairoPlay.className} bg-black/60 backdrop-blur-sm text-white`}>
  <nav className='h-full container mx-auto flex justify-between items-center px-5'>
    <div>
      <Link href='/' className='text-white font-bold text-xl'>
        AFFA
      </Link>
    </div>
    <div>
      <ul className='hidden lg:flex flex-row gap-3'>
        {NAV_ITEMS.map(({ id, label, href }) => (
          <li key={id}>
            <Button variant='ghost' size='lg' asChild className=''>
              <Link className='text-lg' href={href}>{label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <Menu className='inline-block lg:hidden text-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
    </div>
  </nav>
  {mobileMenuOpen && <NavMobileMenu />}
</div>
    )
}

export default Nav