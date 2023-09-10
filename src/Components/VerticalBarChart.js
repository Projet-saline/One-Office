import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DEFAULT_DATA } from './ChartFreePre';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VericalBarChart = ({
    data,
    title
}) => {
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: title,
        },
        },
    };

    return <Bar options={options} data={data || DEFAULT_DATA} />;
}

export default VericalBarChart;
