import React from 'react'
import './Banner.css'
const Banner = (props) => {
    const isfigures=props.figures;
  return (
    <div className='banner'>
      <p className='banner-text' data-aos="fade-up">{props.text1}</p>
      <p className='banner-text' data-aos="fade-up">{props.text2}</p>
      <p className="banner-subtext" data-aos="fade-down">{props.subtext}</p>
      {
        isfigures==true ?(
            <div className='figures-div'>
                <div className="figure-item" data-aos="fade-right">1M+ Eth</div>
                <div className="figure-item" data-aos="fade-up">10k+ users</div>
                <div className="figure-item" data-aos="fade-left">4.5 ⭐</div>
            </div>
        ):(
            <div className='emailForm-div'>
                <input type="text" placeholder='Enter your email'/>
                <button>Get Started</button>
            </div>
        )
      }
    </div>
  )
}

export default Banner
