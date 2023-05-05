import { Button, Card, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';



const Summary = () => {

    const navigate = useNavigate();
    const {state} = useLocation();

    const pageChange = (e) => {
        e.preventDefault();
        navigate("/form",{
            state:{
                name:state.name
            }
        });
    }


  return (
    <>
    <Container>

    <Card>
        <Card.Img variant="top" src={state.image} />
        <Card.Body>
            <h1>
                {state.name}
            </h1>
          <Card.Text>
            {state.summary}
          </Card.Text>


          <Button variant="success gradient" onClick={pageChange}>Book Ticket</Button>
        </Card.Body>
      </Card>
    </Container>

    </>
  )
}

export default Summary