import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Colors from '../Colors';
import '../../Login.css'

function MobileApp() {
  return (
    <>
      <p style={{ marginTop:'6%',marginLeft:'8%', fontStyle:'oblique', fontSize:25, color:Colors.primary }}>Put us in your pocket</p>
    <section  style={{backgroundColor:"#d176d0", color:Colors.white , marginBottom:'5%' , height:350}}>
 
    <Container>
   
    <Row >
      <Col xs={6}>
      <Row  style={{marginTop:'15%', fontSize:24, marginBottom:'3%'}} >Download the app to make your events memorable.</Row>
      <Row>It's all at your fingertips – the companies and vendor you want to higher for your event. Find the right company and vendor to execute your event, and make it unforgetable. Go ahead, download us.</Row>
      <Row style={{marginTop:'5%'}}>
      <Col> 
      <Link to="/companies"> <img src="/images/appgalleryicon.png" alt="AppGllery Link"  width="150" height="50" style={{borderRadius:15}}></img></Link>
      <Link to="/companies"> <img src="/images/googleplay.png" alt="AppGllery Link"  width="150" height="50" style={{borderRadius:15, marginLeft:3,}}></img>
       </Link></Col>
     
      </Row>
      </Col>
      <Col></Col>
      <Col style={{marginTop:'3%'}}>  <img src="/images/mobile.jpg" alt="AppGllery Link"  width="300" height="300" style={{borderRadius:15}}></img></Col>
      
      </Row>
      <Row style={{backgroundColor:Colors.primary}}>
        <Col></Col>
      </Row>
  </Container>
  </section>
  </>
  )
}

export default MobileApp
