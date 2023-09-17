import React from "react";
import { studyData } from '../Datas/fakeDatas.js';
import Card from '../Components/Card.js';

const CardAllCurses = () => {
    return (
        <Card title="Nombre de cours total">
            <h6>{studyData.someData}</h6>
        </Card>
    );
};


export default CardAllCurses;