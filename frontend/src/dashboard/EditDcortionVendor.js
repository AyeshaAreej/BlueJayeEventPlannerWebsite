import React from 'react'
import Menu from './Menu'
import Dropdown from 'react-bootstrap/Dropdown';

export default function EditDcortionVendor() {
  return (
    <>
       {/* Header */}
       <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/dashboard" className="nav-link">Home</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#/"  data-widget="control-sidebar" data-slide="true">
          <i className="fas fa-th-large" /> </a>
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
         <h1>Decoration</h1>
         </section>
         </div>
         <Menu/>
    </>
  )
}
