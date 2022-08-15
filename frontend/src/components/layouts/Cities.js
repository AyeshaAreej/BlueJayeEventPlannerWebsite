import React from 'react'
import { Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Colors from '../Colors';


function Cities() {

   const  title=["Sukkur", "Karachi", "Lahore", "Islamabad"];
 
  return (
 <>
   <p style={{ marginLeft:'2%',marginTop:'10%', fontStyle:'oblique', fontSize:25,color:Colors.primary }}>Find us in these cities, and many more !</p>
    <div style={{margin:'1%', marginBottom:"10%",
          justifyContent:'center', alignItems:'center'}} >
    
    
    <Row xs={2} md={4} className="g-4" >
    
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card style={{borderRadius:25, borderWidth:2, width:'95%'}}
       >
    
        <Link to="/companies">
        <Card.Img
        style={{borderRadius:25, borderColor:Colors.primary, borderWidth:3}}
         variant="top" src="/images/Islamabad.jpg"   /></Link>
        
      <Card.Body>
      
      <Card.Title style={{color:Colors.primary, marginLeft:"37%"}}>{title[idx]} </Card.Title>
      
       
        {/* <Col> <i style={{color:Colors.primary, Width:130 }}  class='fas fa-arrow-right'>
        </i></Col> */}
     
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
