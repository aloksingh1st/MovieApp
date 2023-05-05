import { NavItem} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Nabar() {
  return (
    <Container fluid>

      <Navbar expand="lg" variant="dark" bg="success gradient">
        <Container>
            <NavItem eventKey={1}>
        <Link to="/" className='text-white'>Home</Link>
      </NavItem>
          <Navbar.Brand>MovieApp</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Nabar;