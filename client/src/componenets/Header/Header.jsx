import React from 'react'
import './Header.css'
import {headerImage1,headerImage2} from '../../assets'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-item'>
        <p className='header-text' data-aos="fade-left">The Easiest</p>
        <p className='header-text'data-aos="fade-right">Way To Get Your</p>
        <p className='header-text' data-aos="fade-left">Campaign Funded Is</p>
        <p className='header-text' data-aos="fade-right">To Start Now</p>
        <p className='header-subText' data-aos="fade-left">SepoliaFund give features to start your campaigns and get fund for it in sepolia Ethereum.You can donate sepolia ethereum in other's campaign.</p>
        <button className='metamask-btn' data-aos="fade-up" onClick={()=>{window.location.href = "https://metamask.io/";}}>Get Metamask</button>
      </div>
      <div className='header-item'>
        <img className='header-image' src={headerImage1} alt="" />
        <img className='header-image' src={headerImage2} alt="" />
      </div>
    </div>
  )
}

export default Header
