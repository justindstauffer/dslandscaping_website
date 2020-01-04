import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const Example = (props) => {
    return (
        <Form className="p-4" style={{
            margin: '0',
            color: '#E5C595',
        }}>
            <h1>Request A Quote</h1>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter your name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="Enter your phone #" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="timetocall">Best time to call?</Label>
                        <Input type="text" name="timetocall" id="timetocall" placeholder="What is the best time to call?" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="projectDetails">Project Details</Label>
                <Input type="textarea" name="projectDetails" id="projectDetails" placeholder="Enter project details" />
            </FormGroup>
            <Button className="text-dark" style={{
                background: '#E5C595',
                boxShadow: '0px 0px 10px 1px #000'
            }}>Submit</Button>
        </Form>
    );
}

export default Example;
