import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NaviBar() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
    
        <Container>
       
          <Navbar.Brand href='/'>
          <button type="button" className="btn btn-info"> Home</button>
             </Navbar.Brand>
            
          
        </Container>
        
      </Navbar>
      <br />
      </>
  )
}

export default NaviBar
