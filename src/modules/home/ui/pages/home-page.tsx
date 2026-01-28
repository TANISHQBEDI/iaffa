import React from 'react'
import Hero from '../sections/hero'
import ProgramHighlights from '../sections/program-highlights'
import { PrizesOverview } from '../sections/prizes-overview'

export const HomePage = () => {
  return (
    <div className=''>
        <Hero />
        <ProgramHighlights/>
        <PrizesOverview/>
    </div>
  )
}
