import React, {useState, useEffect} from 'react';
import ButtonSet from '../component/common/ButtonSet'
import BarChart from "../component/chart/BarChart";
import Table from "../component/chart/Table";
import './MainPage.css';

const MainPage = () => {
    const [pageNumber, setPageNumber] = useState('');
    const [chart, setChart] = useState(false);
    const [table, setTable] = useState(false);

    useEffect(() => {
        console.log(pageNumber)
        if(pageNumber === '1' || '3' || '5')
        {
            setChart(true);
            setTable(false);
        }
        if(pageNumber === '2')
        {
            setChart(false);
            setTable(true);
        }
        if(pageNumber === '6')
        {
            setChart(true);
            setTable(true);
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