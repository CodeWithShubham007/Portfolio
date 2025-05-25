import React from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
  return (
   <section className="work section" id='projects'>
    <h2 className='section__title'>Projects</h2>
    <span className='section__subtitle'>My Collection</span>
    {/* <h3 className='section__message'>The project is in the process of being added.</h3> */}
    <Works />
   </section>
  )
}

export default Work
