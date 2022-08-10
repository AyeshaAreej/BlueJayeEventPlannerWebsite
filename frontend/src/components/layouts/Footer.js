import React,{Fragment} from 'react'
import Colors from '../Colors'

const Footer = () => {
  return (
    <Fragment >
    <div style={{backgroundColor:Colors.primary, marginLeft:30, marginRight:30, borderRadius:25}}>
     <footer className='footer'  >
     <div className="container" >
     <div className="row">  

            <div className="col-3  offset-1 col-sm-2" style={{marginTop:60}}> 
                    <h5 style={{color:Colors.white}}>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="./aboutus.html">About</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>

                <div className="col-5 col-sm-5" style={{marginTop:60,  color:Colors.white}}> 
                 <h5>Our Address</h5>
                    <address>Sukkur IBA Univeristy, 
                      <div>
                      <i class="fa fa-phone fa-lg"></i>: +888 1234 5678 
                      </div>
                  <a href="mailto:Bjeventplanner@gmail.com">Bjeventplanner@gmail.com</a>
		           </address>
                </div>
                 
                 <div className="col-2" style={{marginTop:60,}}>
                 <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i style={{color:Colors.white}}  class="fa fa-google-plus"></i></a>
                 <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i  style={{color:Colors.white}} class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i  style={{color:Colors.white}} class="fa fa-linkedin"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i  style={{color:Colors.white}} class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i  style={{color:Colors.white}} class="fa fa-youtube"></i></a>
                        <a class="btn btn-social-icon" href="mailto:"><i  style={{color:Colors.white, }}class="fa fa-envelope-o"></i></a>
                 </div>

            
                
      </div> 
      
      <div className="row justify-content-center">             
                <div className="col-auto">
                    <p  style={{color:Colors.white, }}>© Copyright 2022 Developer: Ayesha Areej</p>
                </div>
           </div> 
     </div>

     </footer>
     </div>
    </Fragment>
  )
}

export default Footer