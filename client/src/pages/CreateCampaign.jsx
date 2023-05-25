import React from 'react'
import { DashboardNav } from '../componenets'
import { useState } from 'react'
import { useStateContext } from '../context'
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
const CreateCampaign = () => {
  const { address,createCampaign } = useStateContext();
  const navigate = useNavigate();
  const [form,setForm]=useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  })
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }
  // console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true)
    // console.log(form.target);
    await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
    // setIsLoading(false);
    navigate('/dashboard');
  }
  if(!address)
  navigate('/')
  return (
    <div className="createCampaign-contaner">
      <DashboardNav/>
      <div className='creatCampaignForm-container'>
        <p className='create-campaign-tilte'>Create Campaign</p>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Your Name*</label>
            <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter your name" onChange={(e)=>{handleFormFieldChange('name',e)}} required></input>
          </div>
          <div class="form-group">
            <label for="Campaign_title">Campaign Title*</label>
            <input type="text" class="form-control" id="Campaign_title"  placeholder="Enter campaign title" onChange={(e)=>{handleFormFieldChange('title',e)}} required></input>
          </div>
          <div class="form-group">
            <label for="Campaign_story">Campaign Story*</label>
            <textarea name="Campaign_story" class="form-control" id="Campaign_story" onChange={(e)=>{handleFormFieldChange('description',e)}} cols="30" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="Campaign_goal">Goal*</label>
            <input type="text" class="form-control" id="Campaign_goal"  placeholder="Enter campaign goal" onChange={(e)=>{handleFormFieldChange('target',e)}} required></input>
          </div>
          <div class="form-group">
            <label for="Campaign_endData">End Date*</label>
            <input type="date" class="form-control" id="Campaign_endData"  placeholder="Enter campaign end date" onChange={(e)=>{handleFormFieldChange('deadline',e)}} required></input>
          </div>
          <div class="form-group">
            <label for="Campaign_image">Image URL*</label>
            <input type="text" class="form-control" id="Campaign_image"  placeholder="Enter image url" onChange={(e)=>{handleFormFieldChange('image',e)}} required></input>
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default CreateCampaign
