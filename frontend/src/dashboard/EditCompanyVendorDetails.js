import React from 'react'
import Menu from './Menu'
import Header from './Header'
import Card from 'react-bootstrap/Card';
import Colors from '../components/Colors';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from '../assets/bg3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faPhone, faInbox, faCity, faUser, faBuilding,aMoneyBill1, faLocation, faBuildingColumns, faTimes, faTasks, faMoneyCheck, faAddressBook, faMailBulk, faMailForward, faMailReply, faMoneyBill1, faDollarSign, faHourglassHalf,  } from '@fortawesome/free-solid-svg-icons'                                 

export default function EditCompanyVendorDetails() {



  return (
    <>
       {/* <Header/> */}
       <Header/>
        
          

            <div> <div className="content-wrapper">
              <section className="content" >
               <div className="container-fluid">
                {/* Main row */}
                 <div className="row">
                 {/* Left col */}
                 <Container>
                  <Row style={{marginTop:"2%"}}>
                    <Col xs={4}> 
                    <Card  > <div style={{display: 'flex',  justifyContent:'center' , alignItems:'center', }}>
                    <img style={{ borderRadius:25}}  src={background}  width="300"  height="150" alt="Profile Pic" />
                    </div>
                    <Card.Body>
                              <div style={{marginBottom:'10%'}}> <span style={{color:Colors.grey,fontSize:20}}> Account Details</span>
                               <div style={{marginTop:"5%", fontSize:14}}>
                              <p > <FontAwesomeIcon icon={ faHome } className="nav-icon"/> Floral Weddings</p>
                              <p> <FontAwesomeIcon icon={ faBuildingColumns } className="nav-icon"/> Company</p>
                              <p> <FontAwesomeIcon icon={ faCity } className="nav-icon"/> Islamabad</p>
                              </div>
                              </div>

                              <div style={{marginBottom:'10%'}}> <span style={{color:Colors.grey,fontSize:20}}> Contact Details</span>
                               <div style={{marginTop:"5%", fontSize:14}}>
                              <p > <FontAwesomeIcon icon={ faMailBulk} className="nav-icon"/> ayesha@gmail.com</p>
                              <p> <FontAwesomeIcon icon={ faPhone } className="nav-icon"/> 0300-1234578</p>
                              <p> <FontAwesomeIcon icon={ faLocation } className="nav-icon"/> New Street, Islamabad</p>
                              </div>
                              </div>

                              <div style={{marginBottom:'2%'}}> <span style={{color:Colors.grey,fontSize:20}}> Service</span>
                               <div style={{marginTop:"5%", fontSize:14}}>
                              <p > <FontAwesomeIcon icon={ faTasks} className="nav-icon"/> Photography, Catering, Venue, Decoration</p>
                              <p> <FontAwesomeIcon icon={ faHourglassHalf } className="nav-icon"/> 12 Hours</p>
                              <p> <FontAwesomeIcon icon={ faDollarSign } className="nav-icon"/> Above 1000000</p>
                              </div>
                              </div>
                    </Card.Body>
                   </Card></Col>

                    <Col>
                    <Card className="text-center " >
                    <Card.Header style={{backgroundColor:Colors.primary, color:Colors.white, fontStyle:'oblique', fontSize:25}}>
                   You Organize the Event, we handle the rest</Card.Header>
                 <Card.Body>
                 <Card.Text style={{fontSize:18}}> <span>
                   Would you like millions of new customers who higher you to provide services for their events? So would we!<br/>
                  It's simple: we list your company details with services you provide online in our mobile application, help you get orders, higher vendors , and successfully plan and execute the various events! </span>
                  <br/><br/> Interested? Let's start our partnership today!
                 </Card.Text>
                 </Card.Body>
                </Card>
                    </Col>
                  </Row>
                 </Container>
               
  </div>
</div>
</section>
</div>
</div>
 <Menu/>
    </>
  )
}
