import "./Login.css";
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Usuario</Form.Label>

          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Contraseña</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button  class="Login-Boton" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Button  class="Login-Boton" >
          Crear usuario
        </Button>
      </Form>
     
    </div>
  );
}
