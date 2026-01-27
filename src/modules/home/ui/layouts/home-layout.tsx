import React from 'react'

const HomeLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`min-h-screen -mt-20 bg-background ${className}`}>
        {children}
    </div>
  )
}

export default HomeLayout