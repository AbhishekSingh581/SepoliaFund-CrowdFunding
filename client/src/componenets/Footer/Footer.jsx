import React from 'react'
import './Footer.css'
import { logo } from '../../assets'
const Footer = () => {
  return (
    <div className='footer'>
      <div>
      <img src={logo} alt="" />
      <h4 style={{letterSpacing:"0.2em"}}>SepoliaFund</h4>
      <p>Don't let lack of funding holding back , apply now and take the first step 
        towards making of your campaign a reality with sepoliaFunds.
      </p>
      </div>
      <div>
        <p>About Us</p>
        <ul>
            <li>Our Character</li>
            <li>Stats</li>
            <li>Press</li>
            <li>Job</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
