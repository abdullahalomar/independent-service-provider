import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import myImg from '../../images/IMG_.jpg';

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-4'>About Me</h2>
            <div className='d-flex justify-content-center mt-3'>
            <Card className='text-center' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={myImg} />
                <Card.Body>
                <Card.Title>Abdullah Al Omar</Card.Title>
            </Card.Body>
                </Card>
            </div>
            <div className='border border-primary px-3 py-2 mt-3'>
                    <h5>I have completed Diploma Engineering in Computer Technology. My goal is to be a good quality developer. Not just web development. I would also like to acquire some more programming language skills and do app development work. In particular, I want to work on web development as well as Android app development. Basically my goal is to be a good quality developer.</h5>
                </div>
        </div>
    );
};

export default About;