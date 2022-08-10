import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Colors from '../Colors';

function GetStarted() {
  return (
    <Card className="text-center " style={{marginTop:40, marginLeft:'15%', marginRight:'15%'}}>
      <Card.Header style={{backgroundColor:Colors.primary, Color:Colors.white, fontStyle:'oblique', fontWeight:"bold"}}>
      You Organize the Event, we handle the rest</Card.Header>
      <Card.Body>

        <Card.Text style={{fontSize:18}}> <span>
        Would you like millions of new customers who higher you to provide services for their events? So would we!<br/>
       It's simple: we list your company details with services you provide online in our mobile application, help you get orders, higher vendors , and successfully plan and execute the various events! </span>
       <br/><br/> Interested? Let's start our partnership today!
        </Card.Text>
      </Card.Body>
      
      
      {/* <Card.Footer className="text-muted" style={{backgroundColor:Colors.white}}> */}
        <div style={{ justifyContent:'center', alignItems:'center' }}>
        <Button 
         href='#register'
         style={{borderColor:Colors.white, borderRadius:25, backgroundColor:Colors.primary, borderWidth:4, width:'20%' ,}}>
         Get Started</Button>
         </div>
      {/* </Card.Footer> */}
    </Card>
  );
}

export default GetStarted;