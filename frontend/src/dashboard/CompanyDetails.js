import React from 'react'
import Menu from './Menu'

export default function CompanyDetails() {
  return (
    <>
       {/* <Header/> */}

    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" ><i className="fas fa-bars" /></a>
      </li></ul></nav>
        
           {/* Body */}
           <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <h1>Company Details</h1>
            </section></div>

     
      <Menu/>
    </>
  )
}
