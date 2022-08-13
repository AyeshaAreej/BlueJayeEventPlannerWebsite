import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Colors from '../Colors';

function Header() {
  return (
    <>
     
  
      <Navbar   variant="dark" style={{backgroundColor:Colors.white}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:28,}}>
            <img
              alt=""
              src="/images/logoheader2.png"
              width="50"
              height="50"
              className="d-inline-block align-top justify-content-end"
            />
            <span style={{color:Colors.primary}} >Blue Jay Event Planners</span>
          </Navbar.Brand>
          
          <Navbar className="justify-content-end" style={{backgroundColor:Colors.white, fontFamily: 'arial ',fontSize:'larger',}}>
          <span style={{color:Colors.primary,marginRight:5}} class="fa fa-user"></span>
          <a style={{color:Colors.primary}} href="#login">Admin Login</a>
      
        </Navbar>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;