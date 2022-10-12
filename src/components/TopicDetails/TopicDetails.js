import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic);
    return (
        <div>
            <Header></Header>

            <h2>Quiz of  {topic.data.name}</h2>
            <p>Total Quiz: {topic.data.total}</p>
            <p>
                {
                    topic.data.questions.map(topic => <Quiz
                        key={topic.id}
                        topic={topic}
                    ></Quiz>)
                }
            </p>

        </div>
    );
};

export default TopicDetails;