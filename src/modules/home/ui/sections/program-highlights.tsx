import React from 'react'
import Link from 'next/link'
import { PROGRAM_HIGHLIGHTS } from '@/data/programs'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const ProgramHighlights = () => {
  return (
    <div className='min-h-screen w-full container mx-auto flex flex-col gap-8 items-center justify-center py-20 px-5'>
      <h1 className='heading-1'>Program Highlights</h1>
      <div className='w-full h-full grid programs gap-4'>
        {PROGRAM_HIGHLIGHTS.map((program) => (
          <Link
            key={program.id}
            href={program.href}
            className={`item${program.id} [grid-area:item${program.id}] group`}
          >
            <Card className='h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1'>
              <CardContent className='h-full flex flex-col items-start justify-end p-6 md:p-8'>
                <CardTitle className='text-xl md:text-2xl lg:text-3xl mb-2 group-hover:text-primary transition-colors duration-300'>
                  {program.label}
                </CardTitle>
                {program.description && (
                  <CardDescription className='text-sm md:text-base mb-4'>
                    {program.description}
                  </CardDescription>
                )}
                <div className='flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300'>
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

export default ProgramHighlights