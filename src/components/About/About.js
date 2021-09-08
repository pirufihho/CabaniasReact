import React from "react";
import Form from "react-bootstrap/Form";
import Button from "@restart/ui/esm/Button";
 
 class About extends React.Component {
    constructor() {
        super();
        this.state = {};
      }
    render() {
      return <Form>
      <Form.Group className="mb-3 form-control-style" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3 form-control-style" controlId="formBasicPassword">
        <Form.Label>Consulta</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Escribe aqui tu consulta" />
      </Form.Group>
      <Form.Group className="mb-3 form-control-style" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="form-control-style" variant="primary" type="submit">
        Submit
      </Button>
    </Form>;
    }
  }

  export default About