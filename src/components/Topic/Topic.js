import React from 'react';
import './Topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='topics-outer'>

            <div className='topic'>
                <h2>{name}</h2>
                <img className='topic-image' src={logo} alt="" />
                <div>Questions:{total}</div>
                <button className='text'><Link to={`/topic/${id}`}>Start & Answer : {total}</Link></button>

            </div>

        </div>
    );
};

export default Topic;