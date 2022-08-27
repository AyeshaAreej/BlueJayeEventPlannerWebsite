import React from 'react'
import Menu from './Menu'
import Dropdown from 'react-bootstrap/Dropdown';

export default function VendorDetails() {
  return (
    <>
    {/* <Header/> */}

 <nav className="main-header navbar navbar-expand navbar-white navbar-light">
 {/* Left navbar links */}
 <ul className="navbar-nav">
   <li className="nav-item">
     <a className="nav-link" data-widget="pushmenu" href="#" ><i className="fas fa-bars" /></a>
   </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
     
     {/* Dropdown Menu */}
     <li className="nav-item dropdown">
       <a className="nav-link" data-toggle="dropdown" href="#/"  data-widget="control-sidebar" data-slide="true">
         <i className="fas fa-th-large" />
        
       </a>
       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
       
           <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
           <Dropdown.Item eventKey="2">Dashboard</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4">Log Out</Dropdown.Item>
         
       </div>
     </li>
   </ul>
   </nav>
     
        {/* Body */}
        <div className="content-wrapper">
         <section className="col-lg-12 connectedSortable">
         <h1>Vendor Details</h1>
         </section></div>

  
   <Menu/>
 </>
  )
}
