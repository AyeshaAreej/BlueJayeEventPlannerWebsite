import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Colors from '../Colors';

function Cities() {


    
   const  title=["Sukkur", "Karachi", "Lahore", "Islamabad"];
 
  return (
 <>
   <p style={{ marginLeft:'8%',marginTop:'6%', fontSize:25,color:Colors.primary }}>Find us in these cities, and many more !</p>
    <div style={{margin:'1%', }}>
    
    
    <Row xs={1} md={4} className="g-4" >
    
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card style={{borderRadius:25, borderColor:Colors.primary, borderWidth:1, width:'95%'}}
       >
    
        <Link to="/companies">
        <Card.Img
        style={{borderRadius:25, borderColor:Colors.primary, borderWidth:3}}
         variant="top" src="/images/Islamabad.jpg"   /></Link>
        

      <Card.Body>
      <Container>
      <Row >
        <Col> <Card.Title>{title[idx]} </Card.Title></Col>
        <Col> <i style={{color:Colors.primary, Width:130 }}  class='fas fa-arrow-right'>
       
        </i></Col>
      </Row>
      </Container>
      </Card.Body>
    </Card>
   </Col>
    ))}
  </Row>
 
</div>
</>

  )
}

export default Cities
