import React, { Component } from "react";
import 
{ Container, 
    Row, 
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

const Signup = () => {
return (
<div>
    <Container fluid className="bg-light py-3">
        <Row>
            <Col xs="12" lg="6" className="py-3">
                <img src="http://via.placeholder.com/700x400" className="img-fluid"/>
            </Col>
            <Col xs="12" lg="4" className="py-3">
                <Form>
                    <FormGroup>
                        <Label for="school">School</Label>
                        <Input type="text" name="school" id="school" placeholder="Harvard University" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="name@school.edu" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Unique ID" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Minimum of 6 characters" />
                    </FormGroup>
                    <FormGroup className="text-center">
                        <Button type="submit">Sign Up!</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
</div>
)
}

export default Signup