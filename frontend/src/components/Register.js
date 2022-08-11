// import '../App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Colors from './Colors';
import GeneralNav from './layouts/GeneralNav';
import { useForm } from 'react-hook-form';
 import background from '../assets/v2edited.jpg';


export default function Register() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  return (
    <>
    <GeneralNav/>
    <section  style={{ backgroundImage:`url(${background})`,  width: "100%",  height: "800px",  } }>

    <Container >
      <Row>
      {/* 1st column */}
        <Col xs={4} style={{color:Colors.white, fontWeight:"bold",fontSize:20, marginTop:'20%', marginLeft:'7%'}}>
        PARTNER WITH US
        We’re hungry for the best things in life: bringing the best food and redefining the shopping experience to our customers.
       foodpanda is multi-national, fast-growing business that maintains its appeal as localised service with community ambition.
        </Col>
        <Col style={{backgroundColor:Colors.white, margin:'12%'}}>
        <InputGroup className="mb-3" style={{marginTop:"5%"}}>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup style={{marginBottom:"5%"}}>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>

        </Col>
      </Row>
   
    </Container>
  
    </section>
    </>
  )
}
