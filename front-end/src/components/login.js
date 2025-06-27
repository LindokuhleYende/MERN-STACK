import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


const Login = props => {
   //default state
   const [name, setName] = useState('')
   const [id, setId] = useState('')

   const onChangeName = e => {
      const name = e.target.value
      setName(name);
   }

   const onChangeId = e => {
      const id = e.target.value
      setId(id);
   }

   const login = () => {
      props.login({ name: name, id: id })
      props.history.push('/')
   }

   return (
      <div >
         <Form>
            <Form.Group as={Row} className="mb-3" controlId="Username">
               <Form.Label column sm="2">Username:</Form.Label>
               <Col sm="10">
                  <Form.Control
                     type="text"
                     placeholder="Enter username"
                     value={name}
                     onChange={onChangeName}
                  />

               </Col>

            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="id">
               <Form.Label column sm="2">ID:</Form.Label>
               <Col sm="10">
                  <Form.Control
                     type="text"
                     placeholder="Enter id"
                     value={id}
                     onChange={onChangeId}
                  />
               </Col>

            </Form.Group>
            <Button variant="primary" onClick={login}>
               Submit
            </Button>

         </Form>
      </div>
   )
}

export default Login;