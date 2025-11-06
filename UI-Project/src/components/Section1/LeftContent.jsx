import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='
      w-full lg:w-1/3 
      flex flex-col justify-between 
      mb-10 lg:mb-0 
      lg:max-h-[80vh] lg:overflow-y-auto
      '>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent
