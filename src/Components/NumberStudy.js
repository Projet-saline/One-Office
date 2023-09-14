import React from "react";
import { studyData } from '../Datas/fakeDatas.js';
import Card from '../Components/Card.js';

const NumberStudy = () => {
    return (
        <Card title="Nombre d'élèves">
            <h6>{studyData.someData}</h6>
        </Card>
    );
};


export default NumberStudy;