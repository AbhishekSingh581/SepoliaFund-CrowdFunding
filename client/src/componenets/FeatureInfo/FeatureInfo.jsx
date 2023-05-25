import React from 'react'
import './FeatureInfo.css'
import {featureImage1,featureImage2} from '../../assets'
const data=[
    {
        title:"Campaign Finance",
        question:"Have you been thinking about how to finance your campaign?",
        answer:"Campaign finance regulations aim to ensure transparency and prevent corruption by establishing rules for fundraising, spending, and disclosure in political campaigns.This regulations seek to balance the need for candidates to raise funds with the goal of preventing undue influence and maintaining the integrity of the electoral process.",
        isreverse:false,
        image:featureImage1
    },
    {
        title:"Rewards",
        question:"You can earn points and rewards during your campaign.",
        answer:"Our reward system is justv one more way that we're committed to supporting and investing in campaigns.We want to see your projects succeed and we want to be part of your journey.Apply for funding now and start earnig points.",
        isreverse:true,
        image:featureImage2
    }

]
const FeatureInfo = (props) => {
  return (
    <div className='featureComponent'>
        {
            data.map((element,i)=>{
                return (
                    <div className='featureDiv' style={{flexDirection:element.isreverse?'row-reverse':'row'}}>
                        <div className='featureImage'><img src={element.image} alt="" /></div>
                        <div className="featureDescription">
                            <p className="feature-title">{element.title}</p>
                            <p className="feature-question">{element.question}</p>
                            <p className="feature-answer">{element.answer}</p>
                            <button className='feature-button'>Apply Now</button>
                        </div>
                    </div>
                )
            })
        }
        <div className="aboutTeam">
            <p className="feature-title">Our Team</p>
            <p className="team-heading" data-aos="fade-up" >Behind every successful campaign, there are dedicated individuals working tirelessly to make it happen.</p>
            <p className="feature-answer">Sepolia has helped bring more than 8000 campaign projects to life since 2016.We simply it for them by making it an easy as possible for users to get funded.</p>
        </div>
    </div>
  )
}

export default FeatureInfo
