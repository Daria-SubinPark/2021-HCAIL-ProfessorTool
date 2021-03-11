import React from "react";
import './App.css';
import MainBar from "./component/common/MainBar";
import MainPage from "./page/MainPage"

function App() {
  return (
    <div className="App">
        <MainBar
            cName={"Basic English"}
            sNum={"9"}
        />
        <div className="App-header">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
