import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';


const FormPage = () => {

    const navigate = useNavigate()
    const {state} = useLocation()

    const[phone , setPhone] = useState();
    const[email , setEmail] = useState();
    const[name , setName] = useState();

    const submitForm = (e)=>{
        e.preventDefault();

        const d = {
            name : name,
            email : email,
            phone : phone
        }

        localStorage.setItem('user', JSON.stringify(d));

        alert("Ticket booked Successfully");

        navigate("/");
    }
  return (
    <>
<Container>

 <h2>
  Grab your ticket Now for <span className='danger'>
    {state.name}
    </span>
 </h2>
<Form onSubmit={submitForm}>

<Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupnumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
</Container>


    </>
  )
}

export default FormPage