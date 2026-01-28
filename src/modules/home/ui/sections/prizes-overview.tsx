import { PRIZES } from '@/data/prizes'
import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { ArrowRight, Award } from 'lucide-react'

export const PrizesOverview = () => {
  return (
    <div className='w-full container mx-auto flex flex-col gap-8 items-center justify-center py-20 px-5'>
      <h1 className='heading-1'>Prizes Overview</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {PRIZES.map((prize) => (
          <Link
            key={prize.id}
            href={prize.href}
            className="group"
          >
            <Card className='h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1'>
              <CardContent className='h-full flex flex-col items-start justify-between p-6 md:p-8'>
                <div className='mb-4'>
                  <Award className='w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300' />
                  <CardTitle className='text-xl md:text-2xl lg:text-3xl mb-2 group-hover:text-primary transition-colors duration-300'>
                    {prize.label}
                  </CardTitle>
                </div>
                <div className='space-y-3 flex-grow'>
                  <div className='inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm md:text-base font-semibold'>
                    {prize.reward}
                  </div>
                  {prize.description && (
                    <CardDescription className='text-sm md:text-base'>
                      {prize.description}
                    </CardDescription>
                  )}
                </div>
                <div className='flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 mt-4'>
                  Learn More
                  <ArrowRight className='w-4 h-4' />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}