import React from 'react'
import Table from 'react-bootstrap/Table';
import Menu from './Menu';
import Button from 'react-bootstrap/Button';


function AllCompanies() {
  return (
    <>
    {/* <Header/> */}
    <div >
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" ><i className="fas fa-bars" /></a>
      </li></ul></nav>

         {/*New Registrations code  */}
         <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                 Registered Companies
                </h3>
              </div>
              {/* /.card-header */}
              <div>
      <ul >
      <Table striped bordered hover variant="light">
        <thead>
        <tr   >
          <th>#</th>
          <th style={{width:'15%'}}>Business Name </th>
          <th style={{width:'18%'}}>Business Type</th>
          <th >City</th>
          <th style={{width:'14%'}}>Price Range</th>
          <th style={{width:'22%'}}>Services</th>
          <th style={{width:'14%'}}>Date</th>
          <th style={{width:'16%'}}>Total Orders</th>
          <th >Action</th>
         
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Floral Weddings</td>
          <td>Company</td>
          <td>Islamabad</td>
          <td>Above 1500000</td>
          <td>Venue Decoration Photography Catering</td>
          <td>16-8-2022</td>
          <td>500</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
        
         
       
        </tr>
        <tr>
          <td>2</td>
          <td>Spice Foods</td>
          <td>Vendor</td>
          <td>Karachi</td>
          <td>Above 100000</td>
          <td>Catering</td>
          <td>16-8-2022</td>
          <td>400</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Royal Photographers</td>
          <td>Vendor</td>
          <td>Sukkur</td>
          <td>Above 150000</td>
          <td>Photography</td>
          <td>16-8-2022</td>
          <td>300</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Cocktail Parties</td>
          <td>Vendor</td>
          <td>Islamabad</td>
          <td>Above 600000</td>
          <td>Venue</td>
          <td>15-8-2022</td>
          <td>200</td>
          <td>
           <Button style={{width:80,margin:2}} variant="success">Accept</Button>
           <Button style={{width:80,margin:2}}variant="danger">Reject</Button>
          </td>
          
        </tr>
      </tbody>
    </Table>
 </ul>
 </div>
 </div>
</section>
 </div>
</div>
    <Menu/>
    </>
    )
}

export default AllCompanies
