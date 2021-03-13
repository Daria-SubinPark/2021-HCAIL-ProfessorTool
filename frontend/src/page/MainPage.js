import React, {useState, useEffect} from 'react';
import ButtonSet from '../component/common/ButtonSet'
import BarChart from "../component/chart/BarChart";
import Table from "../component/chart/Table";
import Wordcloud from "../component/wordcloud/Wordcloud"

import {testQuestion, testAnswer, testAnswerNumber} from "../component/metadata/multipleChoice"
import {mulQuestion, mulAnswer, mulAnswerNumber} from "../component/metadata/multipleQuestion";
import {columns, rows, subQuestion} from "../component/metadata/subjective";
import {starQuestion, starAnswer, starAnswerNumber, starColumns, starRows} from "../component/metadata/star";

import './MainPage.css';



const MainPage = () => {
    const [pageNumber, setPageNumber] = useState('');
    const [chart, setChart] = useState(false);
    const [table, setTable] = useState(false);
    const [wordCloud, setWordCloud] = useState(false);
    const [chartData, setChartData] = useState(['',[],[]]);
    const [listData, setListData] = useState([[],[],'']);

    useEffect(() => {
        if(pageNumber === '1')
        {
            setChartData([testQuestion, testAnswer, testAnswerNumber]);
            setChart(true);
            setTable(false);
            setWordCloud(false);
        }

        if(pageNumber === '2')
        {
            setListData([columns, rows,subQuestion])
            setChart(false);
            setTable(true);
            setWordCloud(false);
        }
        if(pageNumber === '3')
        {
            setChartData([mulQuestion, mulAnswer, mulAnswerNumber]);
            setChart(true);
            setTable(false);
            setWordCloud(false);
        }
        if(pageNumber === '4')
        {
            setChart(false);
            setTable(false);
            setWordCloud(true);
        }
        if(pageNumber === '5')
        {
            setChartData([starQuestion, starAnswer, starAnswerNumber]);
            setChart(true);
            setTable(false);
            setWordCloud(false);
        }
        if(pageNumber === '6')
        {
            setChartData([starQuestion, starAnswer, starAnswerNumber]);
            setListData([starColumns, starRows, ''])
            setChart(true);
            setTable(true);
            setWordCloud(false);
        }
    },[pageNumber]);

    return (
        <div>
            <ButtonSet
                setChartNumber={setPageNumber}/>
            {
                chart ? (
                    <div className="Graph">
                        <BarChart
                        testQuestion={chartData[0]}
                        testAnswer={chartData[1]}
                        testAnswerNumber={chartData[2]}
                        />
                    </div>
                ):(<div />)
            }
            {
                wordCloud ?(
                    <div className="WCloud">
                        <Wordcloud />
                    </div>
                ):(<div />)
            }
            {
                table ?(
                    <div className="List">
                        <Table
                        columns={listData[0]}
                        rows={listData[1]}
                        subQuestion={listData[2]}
                        />
                    </div>
                ):(<div />)
            }
        </div>
    );
}

export default MainPage;