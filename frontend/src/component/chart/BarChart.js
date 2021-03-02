import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
    legend: {
        display: false, // label 숨기기
    },
    title: {
        display: true,
        text: '물을 뜻하는 영단어는?'
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
            }
        }]
    },
    maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
}


const BarChart = () => {

    let calculatedArr = [1,0,2,5,1]
    let rankColor = ["#d6d6d6", "#d6d6d6", "#d6d6d6", "#11b288", "#d6d6d6"]

    const data = {
        labels: ['apple', 'banana', 'orange', 'water', 'lemon'],
        datasets: [
            {
                backgroundColor: rankColor,
                borderColor: rankColor,
                borderWidth: 1,
                hoverBackgroundColor: rankColor,
                hoverBorderColor: rankColor,
                data: calculatedArr
            }
        ]
    };

    return (
        <Bar
            data={data}
            width={400}
            height={200}
            options={options}
        />
    );
};


export default BarChart;