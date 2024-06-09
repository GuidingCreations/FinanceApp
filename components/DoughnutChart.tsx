'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

const data = {
    datasets: [
        {
            label: "Banks",
            data: [
                1250,
                3400,
                5678
            ],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }
    ],
    labels: [
        "Test bank 1",
        "test bank 2",
        "SCCU"
    ]
}

  return (
    <Doughnut 
        data={data} 
        options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}    
    />
  )
}

export default DoughnutChart