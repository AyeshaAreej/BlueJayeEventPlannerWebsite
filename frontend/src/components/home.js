import React from 'react'
import Header from '../components/layouts/Header';
import Header1 from '../components/layouts/Header1';
import MyCarousel from '../components/layouts/MyCarousel';
import GetStarted from '../components/layouts/GetStarted';
import Cities from '../components/layouts/Cities';
import MobileApp from './layouts/MobileApp';


function home() {
  return (
    <>
    {/* <Header1/> */}
    <Header/>
    <MyCarousel/>
    <GetStarted/>
    <Cities/>
    <MobileApp/>
      
    </>
  )
}

export default home
