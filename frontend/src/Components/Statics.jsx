import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../Cssfile/Statics.css';
import Orders from '../Pages/Orders';

const year = [
    { amount: 560, month: "Jan, 2022" },
    { amount: 220, month: "Feb, 2022" },
    { amount: 444, month: "Mar, 2022" },
    { amount: 100, month: "Apr, 2022" },
    { amount: 300, month: "May, 2022" },
    { amount: 220, month: "Jun, 2022" },
    { amount: 662, month: "Jul, 2022" },
    { amount: 784, month: "Aug, 2022" },
    { amount: 1000, month: "Oct, 2022" },
    { amount: 823, month: "Nov, 2022" },
    { amount: 411, month: "Dec, 2022" },
];

const Statics = () => {
    const values = year.map(years => years.amount);
    const labels = year.map(mon => mon.month);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Amount',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)',
                    'rgba(99, 132, 255, 0.2)',
                    'rgba(159, 64, 255, 0.2)',
                    'rgba(132, 235, 99, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(99, 132, 255, 1)',
                    'rgba(159, 64, 255, 1)',
                    'rgba(132, 235, 99, 1)'
                ],
                borderWidth: 1,
            }
        ],
    };

    return (
        <div className='statics'>
            <div className='staticschart'>
                <p>STATISTICS</p>
                <Pie data={chartData} />
            </div>
            <div className='orderdashboard'>
                <Orders />
            </div>
        </div>
    );
};

export default Statics;
