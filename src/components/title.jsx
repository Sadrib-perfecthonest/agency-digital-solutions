import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>{title}</h1>
      <p className='text-lg text-gray-500 dark:text-white/75 max-w-2xl mx-auto'>{desc}</p>
    </div>
  )
}

export default Title