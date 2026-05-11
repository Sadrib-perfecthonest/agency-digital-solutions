import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden  text-gray-700 dark:text-white'>
      
      <div className='inline-flex items-centre gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt=""/>
        <h1 className='text-xs font-medium'>Trusted by 10k+ people</h1>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium 
      xl:leading[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>digital</span> impact.</h1>
      <p className='text-sm sm:text-lg font-medium max-w-2xl text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>We are a team of passionate designers and developers dedicated to creating stunning websites that drive results.</p>
      <div className='relative'>
        <img  src={assets.hero_img} className='w-full max-w-6xl' alt="" />
        <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' alt="" />     

      </div>
      
      
    </div>
  )
}

export default Hero
