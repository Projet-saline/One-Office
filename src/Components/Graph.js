import React from "react";
import ChartFreePre from "../Components/ChartFreePre"
import VericalBarChart from "../Components/VerticalBarChart";
import { statusData, classData, professorsData } from "../Datas/fakeDatas";


const GraphPage = () =>  {
    return (
        <div className='content'>
          
            <ChartFreePre data={statusData} title='Status' />
            <VericalBarChart data={classData} title='Effectifs' />
            <VericalBarChart data={professorsData} title='Matières' />
        </div>
    )
}

export default GraphPage;