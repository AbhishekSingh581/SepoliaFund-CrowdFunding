import React from 'react'
import './Campaigns.css'
import { useState,useEffect } from 'react'
import { useStateContext } from '../../context';
import Campaign from './Campaign';
const Campaigns = () => {
    const {address,contract,getCampaigns}=useStateContext();
    const [campaigns,setCampaigns]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const fetchCampaigns=async()=>{
      setIsLoading(true);
      const data=await getCampaigns();
      setCampaigns(data)
      console.log(data);
      setIsLoading(false)
    }

    useEffect(()=>{
      if(contract) fetchCampaigns()
    },[address,contract])

    const [isAllCampaign,setIsAllCampaign]=useState(true)
    return (
        <div className='campaigns-container'>
            <div className='campaignsBtn'>
                <button className={isAllCampaign?'activeBtn':''} onClick={()=>setIsAllCampaign(true)}>All Campaigns</button>
                <button className={isAllCampaign?'':'activeBtn'} onClick={()=>setIsAllCampaign(false)}>Your Campaigns</button>
            </div>
            {
                isAllCampaign==true?(
                    <div className="campaigns-list-container">
                        {
                            isLoading==true?(
                                <p>loading...</p>
                            ):(
                                <div className="campaigns-list">
                                    {
                                        campaigns.map((campaign)=>{
                                           return <Campaign campaignData={campaign}/>
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                ):(
                    <div className="campaigns-list-container">
                        {
                            isLoading==true?(
                                <p>loading...</p>
                            ):(
                                <div className="campaigns-list">
                                    <p>h2</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Campaigns
