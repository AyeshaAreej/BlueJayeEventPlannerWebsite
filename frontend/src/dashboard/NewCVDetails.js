import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Menu from './Menu';
import Header from './Header';
import Colors from '../components/Colors';
import { useNavigate } from 'react-router-dom';



function NewCVDetails() {
  
  const navigate = useNavigate();

const HandleClick=()=>{
  navigate('/newCVDetails')

  // let role="vendor"
 
  // if (role==="company"){
  // navigate('/CompanyDetails');
  // }
  // else if (role==="vendor"){
  //   navigate('/VendorDetails');
  // }
}



  return (
    <>
    <Header/>
   
    <div >
     {/*New Registrations code  */}
         <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                 Details
                </h3>
              </div>
              {/* /.card-header */}
              {/* card body */}
              <div className=' card-body '>
               <Container>
              <Form>
              <Row><Col><Form.Group className="mb-3">
                   <Form.Label>Business Name</Form.Label>
                   <Form.Control type="text" placeholder="Business Name" />
                  </Form.Group></Col>
                  
                  <Col><Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group></Col>
              </Row>
              <Row><Col><Form.Group className="mb-3">
                   <Form.Label>Business Type</Form.Label>
                   <Form.Control type="text" placeholder="Business Type" />
                  </Form.Group></Col>
                  
                  <Col><Form.Group className="mb-3" >
                  <Form.Label>Services</Form.Label>
                  <Form.Control type="text" placeholder="Services" />
                  </Form.Group></Col>
              </Row>
              <Row><Col><Form.Group className="mb-3">
                   <Form.Label>Phone Number</Form.Label>
                   <Form.Control type="number" placeholder="Phone Numbere" />
                  </Form.Group></Col>
                  
                  <Col><Form.Group className="mb-3" >
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" />
                  </Form.Group></Col>
              </Row>
              <Row><Col><Form.Group className="mb-3">
                   <Form.Label>Address</Form.Label>
                   <Form.Control type="text" placeholder="Address" />
                  </Form.Group></Col>
                  
                  <Col><Form.Group className="mb-3" >
                  <Form.Label>Price Range</Form.Label>
                  <Form.Control type="number" placeholder="Price Range" />
                  </Form.Group></Col>
              </Row>
              <Row>
                  <Col><Form.Group className="mb-3" >
                  <Form.Label>Availability Hours</Form.Label>
                  <Form.Control type="number" placeholder="Availability Hours" />
                  </Form.Group></Col>

                <Col >
                <div style={{ marginLeft:'40%',marginTop:'7%'}}>
                 <Button type="submit"style={{borderColor:Colors.white, borderRadius:20, backgroundColor:Colors.primary, borderWidth:4, width:'60%' ,}}>
                 Add</Button>
                </div>
     
                </Col>
                  
              </Row>

    
     

    </Form>
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

export default NewCVDetails
