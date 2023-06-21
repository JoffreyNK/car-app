'use client'

import React from 'react'
import Image from 'next/image'


import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-xs'>
        <h1 className='hero__title'>Buy, sell, or rent a car - quickly and easily</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless process</p>
        <CustomButton
          title='Explore cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
          />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' className='object-contain' alt='hero' fill />
        </div>
          <div className='hero__image-overlay' />
      </div>
      
    </div>
  )
}

export default Hero