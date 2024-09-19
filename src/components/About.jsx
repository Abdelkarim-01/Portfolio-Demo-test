import React from 'react'
import about from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section  id='about' className='bg-white py-20'>
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={about} alt="about img" className='w-full h-64'/>
            <article>
              <SectionTitle text='code and coffee' />
              <p className='text-slate-600 mt-8 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quaerat vitae iure eius nihil odio magnam facilis sed? 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Fugit totam nulla magnam inventore maxime nesciunt ipsum, 
                 iste assumenda harum aspernatur.
              </p>
            </article>
        </div>
    </section>
  )
}

export default About