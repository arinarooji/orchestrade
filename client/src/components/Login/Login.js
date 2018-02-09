import React, { Component } from "react";
import 
{ Container, 
    Row, 
    Col,
    Button, 
    Input,
    Label
} from 'reactstrap';

const Login = () => {
return (
<div>
    <Container fluid className="text-white bg-dark py-3">
        <Row>
            <Col xs="1" lg="1">
            </Col>
            <Col xs="12" lg="5">
                <h1 className="display-5">Orchestrade</h1>
            </Col>
            <Col xs="5" lg="2">
                <Label >Email</Label>
                <Input placeholder="name@school.edu" />
            </Col>
            <Col xs="5" lg="2">
                <Label>Password</Label>
                <Input />
            </Col>
            <Col lg="2" className="mt-2">
                <br />
                <Button>Log In</Button>
            </Col>
        </Row>
    </Container>
</div>
)
}

export default Login