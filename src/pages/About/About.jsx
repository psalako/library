import React from 'react';
import './About.css';
import aboutImg from "../../images/about.jpeg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title fs-20'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img flex'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Maktaba</h2>
            <p className='fs-17 fw-5'>Thank you for visiting Maktaba! Established in 2023, we are a nonprofit fake company that specializes in sharing books with the world. Customer satisfaction is our utmost concern, so please email our founder, Priya Salako, at psalako@udel.edu with any questions!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;