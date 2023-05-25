import React from 'react'
import { HomePage,Dashboard,AppWrapper,CreateCampaign } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/createCampaign" element={<CreateCampaign />} />
    </Routes>
  )
}

export default App
