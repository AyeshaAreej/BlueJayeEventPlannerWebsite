import React from 'react'
import Menu from './Menu'
import Header from './Header'

export default function VendorDetails() {
  return (
    <>
    <Header/>

         {/* Body */}
         <div className="content-wrapper">
         <section className="col-lg-12 connectedSortable">
         <h1>Vendor Details</h1>
         </section>
         </div>

  
    <Menu/>
 </>
  )
}
