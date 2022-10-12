import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../learner.jpg';
import './Home.css';



const Home = () => {

    return (
        <div className='front-page'>
            <div className='banner-image'>
                <Card className="bg-dark text-white" style={{ width: '22rem' }}>
                    <Card.Img className='banner-image-card' src={img} alt="Card image" />

                </Card>
            </div>
            <div className='banner-text'>
                <Card style={{ width: '38rem' }}>
                    <Card.Body>
                        <Card.Title>Easy Learning</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Smart Learning</Card.Subtitle>
                        <Card.Text>
                            This is a quick and informal assessment of student's knowledge , by which encourage their self awareness of progress and self assessment.And this can help them identify areas they need to develop themselves.The motive of organizing such a contest is to build the confidence level of students.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Home;