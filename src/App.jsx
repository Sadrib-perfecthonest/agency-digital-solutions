import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import DigitalSolutions from './components/DigitalSolutions'
import OurWork from './components/OurWork'
import Teams from './components/Teams'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (

    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <section id="home"><Hero/></section>
      <section id="services"><Trustedby/> <DigitalSolutions/></section>
      <section id="our-work"> <OurWork/> </section> 
      <section id="contact-us"> <Teams/> </section>
    </div>
  )
}

export default App