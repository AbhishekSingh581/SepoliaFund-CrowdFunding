import React from 'react'
import './DashboardNav.css'
import { logo } from '../../assets'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context'
const DashboardNav = (props) => {
    const {address}=useStateContext()
    const navigate =useNavigate()
  return (
    <div className='dashboard-nav'>
      <div className='logoDiv'>
            <img src={logo} alt="logo" data-aos="slide-right" />
      </div>
      <input type="text" className='searchInputField' placeholder='Search for campaigns'/>
      {
        props.isCreateCampaign?(
          <button className='create-campaign-btn' onClick={()=>{address?navigate('/createCampaign'):navigate('/')}}>Create Camp</button>
        ):(
          <button className='create-campaign-btn' onClick={()=>{navigate('/dashboard')}}>Back</button>
        )
      }
    </div>
  )
}

export default DashboardNav
