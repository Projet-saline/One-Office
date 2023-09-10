import React from "react";
import Card from "../Components/Card"
import ChartFreePre from "../Components/ChartFreePre"
import VericalBarChart from "../Components/VerticalBarChart";
import { statusData, classData, professorsData } from "../Datas/fakeDatas";


const GraphPage = () =>  {
    return (
        <div className='content'>
            <h1>Les composants</h1>
            <Card/>
            <ChartFreePre data={statusData} title='Status' />
            <VericalBarChart data={classData} title='Effectifs' />
            <VericalBarChart data={professorsData} title='Matières' />
        </div>
    )
}

export default GraphPage;