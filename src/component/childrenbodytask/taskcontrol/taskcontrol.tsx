import React from 'react';
import {tabBar} from "../constant/constant";
import Listtask from "../listtask/listtask";
import Listboard from "../listboard/listboard";
interface props {
    tab:Object
}
const Taskcontrol:React.FC<props> = ({tab}) => {

    switch (tab)
    {
        case tabBar.List:
            return <Listtask />;
        case tabBar.Board:
            return <Listboard />;
        default :
            return <Listboard />;
    }
    return (
        <></>
    );
}

export default Taskcontrol;
