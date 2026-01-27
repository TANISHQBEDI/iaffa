import HomeLayout from '@/modules/home/ui/layouts/home-layout';
import React from 'react'

import { Cairo_Play } from 'next/font/google';

const cairoPlay = Cairo_Play({ subsets: ['latin']});

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <HomeLayout className={cairoPlay.className}>
        {children}
    </HomeLayout>
  )
}

export default Layout;