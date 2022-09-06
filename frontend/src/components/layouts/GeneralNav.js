import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Colors from '../Colors';



function GeneralNav() {

  
  return (
    <>

    
    <Navbar  sticky="top" variant="dark" style={{backgroundColor:Colors.mainColor}}>
        <Container>
          <Navbar.Brand href="/" style={{fontSize:28,}}>
            <img
              alt=""
              src="/images/logoheader2.png"
              width="50"
              height="50"
              className="d-inline-block align-top "
            />
            <span style={{color:Colors.white}} >Blue Jay Event Planners</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
   
  
  
   
    </>
  )
}

export default GeneralNav;
