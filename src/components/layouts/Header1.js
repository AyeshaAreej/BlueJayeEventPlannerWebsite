import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Colors from '../Colors';

function Header1() {
  return (
    <>
      <div className="header" style={{padding:0.3}}>
     <a href="#/" className="logo">
     <img
              alt=""
              src="/images/MainLogo.png"
            
            
            />
     <span>BlueJay</span>EventPlanners</a>
 
<div className="navbar" style={{marginRight:'1%'}}>
    <a href="#home">home</a>
    <a href="#service">services</a>
    <a href="#about">about</a>
    <a href="#mobileApp">Mobile App</a>
    <a href="#contact">contact</a>
    <a href="/register">Register</a>
    <a href="/login">Admin Login</a>
</div>

<div id="menu-bars" className="fas fa-bars"></div>
    </div>
   
  
     
    </>
  );
}

export default Header1;