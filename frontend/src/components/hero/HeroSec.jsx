import React from 'react'
import Header from './Header'
import RecentFiles from './RecentFiles'

function HeroSec() {
  return (
    <div className='bg-heroBlack font-Montserrat text-customWhite  h-screen w-[84vw] '>
      <Header/>
      <RecentFiles/>
    </div>
  )
}

export default HeroSec