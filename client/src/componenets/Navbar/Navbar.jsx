import React from 'react'
import './Navbar.css'
import {logo,menu} from '../../assets'
import { useStateContext } from '../../context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {address,connect}=useStateContext();
    const [activeMenu,setActiveMenu]=useState(false)
    const navigate=useNavigate();
    if(address)
    navigate('/dashboard')
  return (
    <div className="navbar">
        <div className='navbar-flex'>
            <img src={logo} alt="logo" data-aos="slide-right" />
            <h4 style={{letterSpacing:"0.1em"}} data-aos="slide-right" >SepoliaFund</h4>
            <ul className='nav-items'>
                <li className="nav-item" data-aos="slide-up"><a href="/">Home</a></li>
                <li className="nav-item" data-aos="slide-up"><a href="/about">About</a></li>
                <li className="nav-item" data-aos="slide-up"><a href="/blog">Blog</a></li>
                <li className="nav-item" data-aos="slide-up"><a href="/campaigns">Campaigns</a></li>
                <li className="nav-item" data-aos="slide-up"><a href="/sepolia">Sepolia Faucet</a></li>
            </ul>
            <div className='navbar-btns'data-aos="slide-left">
                <button onClick={connect}>Connect</button>
            </div>
            <img src={menu} alt="menu" data-aos="slide-left" onClick={()=>activeMenu?setActiveMenu(false):setActiveMenu(true)} className='media-menu'/>
        </div>
        <div className={activeMenu?'activate-div slide-bottom':'deactive-div'}>
            <ul>
                <li style={{listStyle:"none"}}><a href="/">Home</a></li>
                <li style={{listStyle:"none"}}><a href="/about">About</a></li>
                <li style={{listStyle:"none"}}><a href="/blog">Blog</a></li>
                <li style={{listStyle:"none"}}><a href="/campaigns">Campaigns</a></li>
                <li style={{listStyle:"none"}}><a href="/sepolia">Sepolia Faucet</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
