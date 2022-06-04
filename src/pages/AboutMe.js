import {React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Education from './Education';
import Experience from './Experience';
import Hobby from './Hobby';

export default function AboutMe() {
    
    const [currentPage, changePage] = useState(<Education />);
    
    function LinkButton ({linkTo, children, ...props}) {

        return (
            <button onClick={() => changePage(linkTo)}>
                {children}
            </button>
        )
    }

    return <Container fluid>
        <Row>
            <Col xs={{span: 12, order: 'last' }} md={{span: 3, order: 'first' }} className="about-me-nav">
                <LinkButton linkTo={<Education />}> PlaceHolder - Education </LinkButton>
                 <LinkButton linkTo={<Experience />}> PlaceHolder - Experience </LinkButton>
                <LinkButton linkTo={<Hobby />}> PlaceHolder - Hobby </LinkButton>
            </Col>
            <Col xs={{span: 12}} md={9} className="about-me-window">
                    {currentPage}
            </Col>
        </Row>
    </Container>
}

