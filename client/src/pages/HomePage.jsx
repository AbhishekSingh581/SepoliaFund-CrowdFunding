import React from 'react'
import { Navbar, Header,Banner,FeatureInfo,Footer } from '../componenets';
import './style.css'
const HomePage = () => {
  
  return (
    <div className="homepage">
      <Navbar/>
      <Header/>
      <Banner text1="Get your campaign funded." 
      text2="See how with SepoliaFund." 
      subtext= "Our team of experienced industry professionals is dedicated to helping to navigate the fund process and bring your campaign to success." 
      figures={true} />
      <FeatureInfo />
      <Banner text1="We already to help you,." 
      text2="your campaign and fund it." 
      subtext= "Turn yor campaign's dream into reality and make your project a success with the support of passionate users who will help your campaigns." 
      figures={false} />
      <Footer/>
    </div>
  )
}

export default HomePage
