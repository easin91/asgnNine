import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Header from '../Header/Header';
import './Stat.css';

const Stat = () => {

    const [stats, setStats] = useState([]);
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {

                const statsLoaded = data.data.data;
                const statsData = statsLoaded.map(stat => {
                    const singleStat = {
                        name: stat.name,
                        quantity: stat.total
                    }
                    return singleStat
                })
                console.log(statsData);
                setStats(statsData);
            });
    }, [])
    return (
        <div>
            <Header></Header>
            <div className='chart'>
                <BarChart width={600} height={580} data={stats}>
                    <Bar dataKey="quantity" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Stat;