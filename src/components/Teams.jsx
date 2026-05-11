import React from 'react'
import Title from './Title'
import { useState } from 'react'

const Teams = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  const teamData = [
    { name: 'Haley Carter', title: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' },
    { name: 'James Walker', title: 'Ads manager', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },
    { name: 'Jessica Morgan', title: 'Vice president', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Ashley Bennett', title: 'Marketing & Sales', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { name: 'Emily Harlow', title: 'Content creator', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { name: 'Ryan Mitchell', title: 'Content creator', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Megan Brooks', title: 'Performance manager', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Amber Foster', title: 'Senior writer', image: 'https://randomuser.me/api/portraits/women/13.jpg' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@agency.ai?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
    setShowAlert(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setShowAlert(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'>
        <Title title='Meet the team' desc="A passionate team of digital experts dedicated to your brand's success."/>
        
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-5xl'>
          {teamData.map((team, index) => (
            <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300'>
              <img src={team.image} className='w-12 h-12 rounded-full' alt={team.name} />
              <div>
                <h3 className='font-semibold text-sm'>{team.name}</h3>
                <p className='text-xs opacity-60'>{team.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAlert && (
        <div className='fixed top-20 left-1/2 transform -translate-x-1/2 z-50'>
          <div className='bg-green-500 text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
            </svg>
            <span className='font-semibold text-lg'>Message sent successfully!</span>
          </div>
        </div>
      )}

      <div id='contact-us' className='px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 pb-16 text-gray-700 dark:text-white'>
        <Title title='Get in touch' desc="Have a project in mind? Let's talk about it."/>
        
        <div className='max-w-2xl mx-auto mt-12'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold mb-2'>Name</label>
              <input 
                type='text' 
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                placeholder='Your name'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-2'>Email</label>
              <input 
                type='email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors'
                placeholder='your@email.com'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold mb-2'>Message</label>
              <textarea 
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none'
                placeholder='Your message...'
              ></textarea>
            </div>
            <button 
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all hover:scale-105 duration-300'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className='bg-gray-900 dark:bg-black text-white px-4 sm:px-12 lg:px-24 xl:px-40 py-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Agency.ai</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>We craft digital solutions that move your business forward with creativity and innovation.</p>
            </div>
            
            <div>
              <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li><a href='#home' className='hover:text-white transition-colors'>Home</a></li>
                <li><a href='#services' className='hover:text-white transition-colors'>Services</a></li>
                <li><a href='#our-work' className='hover:text-white transition-colors'>Our Work</a></li>
                <li><a href='#contact-us' className='hover:text-white transition-colors'>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className='text-lg font-semibold mb-4'>Services</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>Advertising</li>
                <li>Content Marketing</li>
                <li>Social Media</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
            
            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
              <ul className='space-y-2 text-gray-400 text-sm'>
                <li>📍 123 Business Street, NY</li>
                <li>📧 contact@agency.ai</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>🕐 Mon - Fri: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>© 2024 Agency.ai. All rights reserved.</p>
            <div className='flex gap-4 text-gray-400 text-sm'>
              <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
              <a href='#' className='hover:text-white transition-colors'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Teams