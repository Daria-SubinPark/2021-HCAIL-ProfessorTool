import React from "react";
import './App.css';
import './component/chart/BarChart'
import BarChart from "./component/chart/BarChart";
import MainBar from "./component/common/MainBar";
import Table from "./component/chart/Table"

function App() {
  return (
    <div className="App">
        <MainBar
            cName={"Basic English"}
            sNum={"9"}
        />
        <div className="App-header">
            <div className="Graph">
                <BarChart />
            </div>
            <div className="List">
                <Table />
            </div>
        </div>
    </div>
  );
}

export default App;
