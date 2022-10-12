import React, { useState } from 'react';
import './Quiz.css';
import img from '../../eye.png';
import { Button, Col, Toast } from 'react-bootstrap';


const Quiz = ({ topic }) => {
    const { id, question, options, correctAnswer } = topic;
    const [show, setShow] = useState(false);

    return (
        <div className='quiz'>

            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Correct Answer</strong>
                        <small>Check & Review</small>
                    </Toast.Header>
                    <Toast.Body>{correctAnswer}</Toast.Body>
                </Toast>
            </Col>

            <p>Id :{id}</p>
            <p>Question: {question}</p>

            <div className='options'>

                <Button className='options-image-btn' variant="light" onClick={() => setShow(true)}>
                    <img className='options-image' src={img} alt="" />
                </Button>
                <label className="radio">
                    <input name="radio" type="radio" checked />
                    <span>{options[0]}</span>
                </label>
                <label className="radio">
                    <input name="radio" type="radio" checked />
                    <span>{options[1]}</span>
                </label>
                <label className="radio">
                    <input name="radio" type="radio" checked />
                    <span>{options[2]}</span>
                </label>
                <label className="radio">
                    <input name="radio" type="radio" checked />
                    <span>{options[3]}</span>
                </label>
            </div>
        </div>
    );
};

export default Quiz;