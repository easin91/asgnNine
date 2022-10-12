import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import Topic from '../components/Topic/Topic';

const Main = () => {

    const topics = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Main;