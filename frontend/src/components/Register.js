// import '../App.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Colors from './Colors';
import GeneralNav from './layouts/GeneralNav';
import { set, useForm } from 'react-hook-form';
 import background from '../assets/bg3.jpg';


export default function Register() {

  const [type, setType]=useState(null) ;
  
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);



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

 
// errors styling
const errorsStyle = {
  color: "red",
  padding: "2px",
  fontFamily: "Arial"
};



  return (
    <>
    <GeneralNav/>
    <section  className='col col-sm-12 col-md-12'  style={{ backgroundImage:`url(${background})`,  } }>

    <Container >
      <Row>
      {/* 1st column */}
        <Col xs={4} style={{color:Colors.white, fontWeight:"bold",fontSize:23, marginTop:'17%', marginLeft:'4%'}}>
        <h3 style={{marginBottom:'10%'}}> PARTNER WITH US</h3>
        We aim to get people in touch with event planner companies and companies with vendors to book and execute event successfully.<br/><br/>
        BlueJay Event Planners is national, fast-growing business that maintains its appeal as localised service with community ambition.
        </Col>


        {/* Form  */}
        
        <Col  style={{backgroundColor:Colors.white, margin:'3%', borderRadius:8, }}>
        <h5 style={{margin:'7%', fontSize:24}}>Interested? Fill in the form below to become our partner and increase your revenue!</h5>
        

        <form id='form'  onSubmit={handleSubmit(onSubmit)}>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput" label="Business Name" className="mb-2">
        <Form.Control placeholder="Business Name"  aria-label="company_name"  aria-describedby="basic-addon1"  {...register("company_name", { required : true })}   />
        <div style={errorsStyle}>{errors.company_name?.type === "required"  && "Business Name is required" }</div>
        </FloatingLabel>
       
        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control placeholder="Email"  aria-label="Email"  aria-describedby="basic-addon1"  {...register("email", { required : true })}   />
        <div style={errorsStyle}>{errors.email?.type === "required"  && "Email is required" }</div>
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Business Type" style={{Color: Colors.dark}}>
      <Form.Select value={type} aria-label="Business Type"  required onChange={(e) => setType(e.target.value || null)}
      //  {...register("role", { required : true })}  
 >      <option  value="null" >None</option>
       <option  value="Company" >Company</option>
        <option value="Vendor">Vendor</option>
      </Form.Select>
      {/* <div style={errorsStyle}>{errors.role?.type === "required"  && "Business type  is required" }</div> */}
    </FloatingLabel>
{/* services */}
    {[ option ].map((type) => (
        <div key={`inline-${type}`} className="mb-3" style={{marginTop:'2%', fontSize:16}}>
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

      <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput formPlaintextPassword" label="Password" className="mb-3" >
        <Form.Control  type="password"  placeholder="Password"  aria-label="password"  aria-describedby="basic-addon1"  {...register("password", { required : true, minLength: 6 })}   />
        <div style={errorsStyle}>{errors.password?.type === "required"  && "Password is required" }</div>
        <div style={errorsStyle}> {errors.password?.type === "minLength" && "At least 6 characters are required"}</div>
        </FloatingLabel>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput " label="phone_no" className="mb-3" >
        <Form.Control  type="number"  placeholder="Phone Number"  aria-label="Phone Number"  aria-describedby="basic-addon1"  {...register("phone_no", { required : true , minLength: 11, maxLength:12 })}   />
        <div style={errorsStyle}>{errors.phone_no?.type === "required"  && "Phone number is required" }</div>
        <div style={errorsStyle}>{errors.phone_no?.type === "minLength"  && "At least 11 characters are required" }</div>
        <div style={errorsStyle}>{errors.phone_no?.type === "maxLength"  && "Max Length Exceed" }</div>
        </FloatingLabel>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput " label="City" className="mb-3" >
        <Form.Control  type="text"  placeholder="City"  aria-label="city"  aria-describedby="basic-addon1"  {...register("city", { required : true })}   />
        <div style={errorsStyle}>{errors.city?.type === "required"  && "City is required" }</div>
        </FloatingLabel>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput " label="Address" className="mb-3" >
        <Form.Control  type="text"  placeholder="Address"  aria-label="address"  aria-describedby="basic-addon1"  {...register("address", { required : true })}   />
        <div style={errorsStyle}>{errors.address?.type === "required"  && "Address is required" }</div>
        </FloatingLabel>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput " label="Price Range" className="mb-3" >
        <Form.Control  type="number"  placeholder="Price Range"  aria-label="price_range"  aria-describedby="basic-addon1"  {...register("price_range", { required : true })}   />
        <div style={errorsStyle}>{errors.price_range?.type === "required"  && "Price Range is required" }</div>
        </FloatingLabel>

        <FloatingLabel  style={{marginTop:"2%", }}  controlId="floatingInput " label="Availability Hours" className="mb-3" >
        <Form.Control  type="number"  placeholder="Availability Hours"  aria-label="availability_hours"  aria-describedby="basic-addon1"  {...register("available_hours", { required : true, maxLength:2 })}   />
        <div style={errorsStyle}>{errors.available_hours?.type === "required"  && "Available hours are required" }</div>
        <div style={errorsStyle}>{errors.available_hours?.type === "maxLength"  && "Max Length Exceed" }</div>
        </FloatingLabel>
        <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        </Form.Group>

        <div className="d-grid gap-2">
     <Button size="lg" type="submit" style={{ marginBottom:"2%" ,color:Colors.white, backgroundColor:Colors.primary, borderColor:Colors.primary }}> Submit</Button>
    </div> 
  </form>
 
  
      
     
 </Col>
</Row>
</Container>
</section>

<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'5%', fontWeight:'bold'}}>
    <h3>Steps to Activation</h3>
</div>
  
   <Container>
    <Row>
      <Col>
      <img alt=""
              src="../assets/pic1.PNG"
              width="50"
              height="50"
              className="d-inline-block"
            />
        </Col>
    </Row>
   </Container>
    </>
  )
}
