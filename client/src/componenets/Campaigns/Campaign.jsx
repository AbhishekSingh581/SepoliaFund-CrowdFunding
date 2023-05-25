import React from 'react'
import './Campaign.css'
import { profile } from '../../assets'
const Campaign = ({campaignData}) => {
    var ownerAddress=campaignData.owner
    ownerAddress=ownerAddress.slice(0,30)+'...'

    const daysLeft = (deadline) => {
      const difference = new Date(deadline).getTime() - Date.now();
      const remainingDays = difference / (1000 * 3600 * 24);
    
      return remainingDays.toFixed(0);
    };

    const remainingDays = daysLeft(campaignData.deadline);
  return (
    <div class="card">
        <img class="card-img-top" src={campaignData.image} alt="Card image cap"></img>
        <div class="card-body">
            <p class="card-title">{campaignData.title}</p>
            <p class="card-description">{campaignData.description}</p>
            <div className="date-fund">
                <div className='dete-fund-item'>
                  <p className="dete-fund-p" style={{marginBottom:"0em"}}>12ETH</p>
                  <p className="card-description">amount raised</p>
                </div>
                <div lassName='dete-fun-item'>
                  <p className="dete-fund-p" style={{marginBottom:"0em"}}>{remainingDays}</p>
                  <p className="card-description">days left</p>
                </div>
            </div>
            <div className='card-owner'>
               <img src={profile} alt="" />{ownerAddress}</div>
        </div>
    </div>
  )
}

export default Campaign
