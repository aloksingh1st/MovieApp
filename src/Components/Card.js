import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Cards(props) {

    const d = {
        name:props.name,
        image:props.image,
        
        summary:props.summary,
        link:props.link

    }

    const navigate = useNavigate();

    const pageChange = (e) => {
        e.preventDefault();
        sessionStorage.setItem('data', JSON.stringify(d));
        console.log("handle request ");
        navigate("/summary",
        {
            state: {
                id:props.id,
                summary:props.summary,
                image:props.image,
                name:props.name
            }
        });
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} alt="Show Image Not Found"/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Language : <span className='text-danger'>{props.language}</span>
        </Card.Text>
        <Card.Text>
        Premiered : <span className='text-danger'>{props.premiered}</span>
        </Card.Text>
        <Card.Text>
        Rating : <span className='text-danger'>{props.rating}</span>
        </Card.Text>
        <Button variant="success gradient" onClick={pageChange}>Read Summary</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;