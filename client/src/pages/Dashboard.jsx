import React from 'react'
import { useStateContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { DashboardNav,Campaigns } from '../componenets';
const Dashboard = () => {
  const {address} =useStateContext()
  const Navigate=useNavigate()

  if(!address)
    Navigate('/')

  // const [campaigns,setCampaigns]=useState([])
  // const [isLoading,setIsLoading]=useState(false)

  // const fetchCampaigns=async()=>{
  //   setIsLoading(true);
  //   const data=await getCampaigns();
  //   setCampaigns(data)
  //   setIsLoading(false)
  // }

  // useEffect(()=>{
  //   if(contract) fetchCampaigns()
  // },[address,contract])

  // console.log(campaigns);

  // if(isLoading)
  // return <p>Loading....</p>

  return (
    <div className='dashboardPage'>
      <DashboardNav isCreateCampaign={true}/>
      <Campaigns/>
    </div>
  )
}

export default Dashboard
