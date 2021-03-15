import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({testQuestion, testAnswer, testAnswerNumber}) => {

    let rankColor = ["rgba(238, 102, 121, 1)",
        "rgba(98, 181, 229, 1)",
        "rgba(255, 198, 0, 1)",
        "#11b288",
        "#207ac7"]

    const options = {
        legend: {
            display: false, // label 숨기기
        },
        title: {
            display: true,
            text: testQuestion
        },
        maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    }

    const data = {
        datasets: [{
            data: testAnswerNumber,
            backgroundColor: rankColor,
            borderColor: rankColor,
            hoverBackgroundColor: rankColor,
            hoverBorderColor: rankColor
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: testAnswer
    };

    return (
        <Pie
            data={data}
            width={400}
            height={300}
            options={options}
        />
    );
};


export default PieChart;