import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Colors from '../Colors';

function Header1() {
  return (
    <>
     
  
      <Navbar sticky="top" variant="dark" style={{backgroundColor:Colors.primary}}>
        <Container style={{justifyContent:'center', alignItems:'center'}}>
          <Navbar.Brand href="#register" style={{fontSize:29, }}>
            <img
              alt=""
              src="/images/logo2.1.png"
              width="52"
              height="52"
              className="d-inline-block align-top "
             
            />
            <span style={{color:Colors.white,}} >Do you want to do business with us?</span>
            <Button style={{marginLeft:10,borderColor:Colors.white, borderWidth:2}} variant="outline-primary"
            href="/register">
            
            Register Now</Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;