import React from "react";
import Card from "../Components/Card";
import ChartFreePre from "../Components/ChartFreePre";
import GraphPage from "../Components/Graph";
import VericalBarChart from "../Components/VerticalBarChart";

const HomeTest = () =>  {

    return (
        <div className='content'>
            <h1>Les composants</h1>
            <Card/>
            <ChartFreePre/>
            <GraphPage/>
            <VericalBarChart/>
        </div>
    )
}

export default HomeTest;