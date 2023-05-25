import { useStateContext } from '../context'
import { Navigate } from 'react-router-dom'

import { Component } from 'react';
import HomePage from './HomePage.jsx';
class AppWrapper extends Component{
    render(){
        return(
            <HomePage/>
        );
  }
}
export default AppWrapper