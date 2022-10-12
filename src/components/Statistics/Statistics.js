import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Statistic from '../Statistic/Statistic';


const Statistics = () => {
    const statistics = useLoaderData();
    return (
        <div>
            <Header></Header>
            <h3>This is Statistics page: {statistics.data.length}</h3>
            {
                statistics.data.map(statistic => <Statistic
                    key={statistic.id}
                    statistic={statistic}
                ></Statistic>)
            }
        </div>
    );
};

export default Statistics;