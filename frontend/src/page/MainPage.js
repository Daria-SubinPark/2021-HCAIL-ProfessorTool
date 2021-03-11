import React, {useState, useEffect} from 'react';
import ButtonSet from '../component/common/ButtonSet'
import BarChart from "../component/chart/BarChart";
import Table from "../component/chart/Table";
import Wordcloud from "../component/wordcloud/Wordcloud"
import './MainPage.css';

const MainPage = () => {
    const [pageNumber, setPageNumber] = useState('');
    const [chart, setChart] = useState(false);
    const [table, setTable] = useState(false);
    const [wordCloud, setWordCloud] = useState(false);

    useEffect(() => {
        console.log(pageNumber)
        if(pageNumber === '1' || '3' || '5')
        {
            setChart(true);
            setTable(false);
            setWordCloud(false);
        }
        if(pageNumber === '2')
        {
            setChart(false);
            setTable(true);
            setWordCloud(false);
        }
        if(pageNumber === '4')
        {
            setChart(false);
            setTable(true);
            setWordCloud(true);
        }
        if(pageNumber === '6')
        {
            setChart(true);
            setTable(true);
            setWordCloud(false);
        }
    });

    return (
        <div>
            <ButtonSet
                setChartNumber={setPageNumber}/>
            {
                chart ? (
                    <div className="Graph">
                        <BarChart />
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
                        <Table/>
                    </div>
                ):(<div />)
            }
        </div>
    );
}

export default MainPage;