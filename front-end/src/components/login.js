import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/login.css"

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

   useEffect(() => {
      console.log(`${name} (ID: ${id}) has logged in.`)

   }, [name, id]);


   return (
      <div className='login-container'>
         <h2>Login Form</h2>


         <Form>
            <Form.Group >
               <Form.Label>Username:</Form.Label>

               <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={name}
                  onChange={onChangeName}
               />



            </Form.Group>
            <Form.Group >
               <Form.Label>ID:</Form.Label>

               <Form.Control
                  type="text"
                  placeholder="Enter id"
                  value={id}
                  onChange={onChangeId}
               />


            </Form.Group>
            <Button variant="primary" onClick={login}>
               Submit
            </Button>

         </Form>
      </div>
   )
}

export default Login;