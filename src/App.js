import React from 'react'
import './App.scss';
import { Component } from 'react';
import Navbar from './components/navbar/navbar'
import TourList from './components/TourList'
class App extends Component{
  render(){
    return <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
  }
}
export default App;
