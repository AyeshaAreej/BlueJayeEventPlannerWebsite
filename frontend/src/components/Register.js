// import '../App.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Colors from './Colors';
import GeneralNav from './layouts/GeneralNav';
import { set, useForm } from 'react-hook-form';
 import background from '../assets/v2edited.jpg';


export default function Register() {

  const [type, setType]=useState("")
  // const [service, setService]=useState("")
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  function handleSelectChange(event) {
  
    setType(event.target.value);
   
    
  }

console.log("type is",type)



//dynamic selection of checkbox and radio box
let option="checkbox"
  if(type=== "Company")
  {
  option="checkbox";
  console.log("inside company option",  option)
}
else if (type=== "Vendor")
{
 option="radio"
  console.log("inside vendor option", option )

}
 
console.log(option)

 

  return (
    <>
    <GeneralNav/>
    <section className='col col-sm-12 col-md-12'  style={{ backgroundImage:`url(${background})`,  width: "100%",  height: "800px",  } }>

    <Container >
      <Row>
      {/* 1st column */}
        <Col xs={4} style={{color:Colors.white, fontWeight:"bold",fontSize:20, marginTop:'15%', marginLeft:'4%'}}>
        <h3 style={{marginBottom:'10%'}}> PARTNER WITH US</h3>
        We aim to get people in touch with event planner companies and companies with vendors to book and execute event successfully.<br/><br/>
        BlueJay Event Planners is national, fast-growing business that maintains its appeal as localised service with community ambition.
        </Col>


        {/* Form  */}
        
        <Col  style={{backgroundColor:Colors.white, margin:'11%', borderRadius:8, }}>
        <h5 style={{margin:'7%'}}>Interested? Fill in the form below to become our partner and increase your revenue!</h5>
        

        <form id='form'  onSubmit={handleSubmit(onSubmit)}>

        <FloatingLabel  style={{marginTop:"5%", }}  controlId="floatingInput" label="Business Name" className="mb-3">
        <Form.Control placeholder="Business Name"  aria-label="company_name"  aria-describedby="basic-addon1"  {...register("company_name", { required : true })}   />
        {errors.company_name?.type === "required" }
        </FloatingLabel>
       
        <FloatingLabel  style={{marginTop:"5%", }}  controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control placeholder="Email"  aria-label="Email"  aria-describedby="basic-addon1"  {...register("email", { required : true })}   />
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Business Type" style={{Color: Colors.dark}}>
      <Form.Select value={type} aria-label="Business Type"  onChange={handleSelectChange}>
       <option  value="Company" >Company</option>
        <option value="Vendor">Vendor</option>
      </Form.Select>
    </FloatingLabel>
{/* services */}
    {[ option ].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Venue"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Decoration"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Catering"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            label="Photography"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}

  
     
       
       
        </form>
       </Col>
      </Row>
    </Container>
   </section>
    </>
  )
}
