import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
const Statistic = ({ statistic }) => {

    const { name, total } = statistic;
    console.log(name, total);
    const data = [
        { name: statistic.name, total: statistic.total }
    ];
    // const data = { name: statistic.name, total: statistic.total };
    return (
        <BarChart width={500} height={400} data={data}>
            <Bar dataKey="total" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />

        </BarChart>
    );
};

export default Statistic;