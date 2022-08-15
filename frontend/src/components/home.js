import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Colors from './Colors';
import Header from '../components/layouts/Header';
import Header1 from '../components/layouts/Header1';
import MyCarousel from '../components/layouts/MyCarousel';
import GetStarted from '../components/layouts/GetStarted';
import Cities from '../components/layouts/Cities';
import MobileApp from './layouts/MobileApp';


function home() {
  return (
    <>
    <Header1/>
    <Header/>
    <MyCarousel/>
    <GetStarted/>

    <MobileApp/>   
   

     {/* Our process */}

   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'5%', fontWeight:'bold'}}>
    <h3>How it works</h3>
</div>
  
   <Container >
    <Row style={{marginTop:"5%"}}>
     
      <Col> <img  src="/images/process1.jpg"   width="70"  height="70" alt="step1" /></Col>
      <Col> <img  src="/images/process2.png"   width="70"  height="70" alt="step1" /></Col>
      <Col> <img  src="/images/process3.png"   width="70"  height="70" alt="step1" /></Col>
      <Col> <img  src="/images/process4.jpg"   width="70"  height="70" alt="step1" /></Col>
     
    </Row>

    <Row style={{marginTop:"2%"}}>

      <Col >Step 1:<br/> Customer select an available company and fill their booking form.</Col>
      <Col >Step 2:<br/> Company ask customer to pay advance Company accepts the order, and starts searching vendors for needed services . </Col>
      <Col >Step 3:<br/> Company highers vendors for services like food, venue and so on </Col>
      <Col >Step 4:<br/> Company and vendor both together execute the event </Col>
     
    </Row>
   
   </Container>

   <Cities/>
      
    </>
  )
}

export default home
