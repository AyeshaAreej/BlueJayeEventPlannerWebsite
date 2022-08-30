import React from 'react'
import Menu from './Menu'
import Header from './Header'

export default function EditCompanyVendorDetails() {


  
 

  return (
    <>
       {/* <Header/> */}
       <Header/>
        
          

            <div>  <div className="content-wrapper">
            <h4 style={{marginLeft:'45%', marginTop:'3%'}}>Details</h4>
            {/* /.content-header */}
             {/* Main content */}
              <section className="content" >
               <div className="container-fluid">
                {/* Main row */}
                 <div className="row">
                 {/* Left col */}
                   <section className="col-lg-6 connectedSortable">
                       <div className="card">
                   
                   
                       <div className="card-body">
                       </div>
                   </div>
            {/* /.card */}

              </section>
          
           {/* /.Left col */}
              {/*Edit Company Vendor Details*/}
          <section className="col-lg-6 ">
           <div className="card">
               <div className="card-header">
                       <h3 className="card-title">
                       <i className="ion ion-clipboard mr-1" />
                         Edit
                       </h3>
                </div>{/* /.card-header */}
                   
               <div className="card-body">
               </div>
                   </div>

             
            {/* /.card */}
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
</div>


     
      <Menu/>
    </>
  )
}
