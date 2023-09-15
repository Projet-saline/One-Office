import React from "react";
import Card from "../Components/Card";
import ChartFreePre from "../Components/ChartFreePre";
import GraphPage from "../Components/Graph";
import VericalBarChart from "../Components/VerticalBarChart";
import HoraireGraph from "../Components/HoraireGraph";
import NumberStudy from "../Components/NumberStudy";
import NumberProfessors from "../Components/NumberProfessors";
import CardFreePre from "../Components/CardFreePre";
import CardAllCurses from "../Components/CardAllCurses";
import PresentationProf from "../Components/PresentationProf";


const HomeTest = () =>  {

    return (
        <>
            <h1>Les composants</h1>
            <Card/>
            <ChartFreePre/>
            <GraphPage/>
            <VericalBarChart/>
            <HoraireGraph/>
            <NumberStudy/>
            <NumberProfessors/>
            <CardFreePre/>
            <CardAllCurses/>
            <PresentationProf/>
        </>
    )
}

export default HomeTest;