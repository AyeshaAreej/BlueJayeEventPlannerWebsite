import React from 'react'
import Menu from './Menu'
import Header from './Header'

export default function CompanyDetails() {
  return (
    <>
       {/* <Header/> */}
       <Header/>
        
           {/* Body */}
           <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <h1>Company Details</h1>
            </section></div>

     
      <Menu/>
    </>
  )
}
