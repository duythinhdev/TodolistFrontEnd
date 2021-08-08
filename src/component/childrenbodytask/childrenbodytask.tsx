import React, {useEffect, useState} from 'react';
import "./childrenbodytask.scss";
import Navbody from "../Navbody/navbody";
import Taskcontrol from "./taskcontrol/taskcontrol";
import {tabBar } from "./constant/constant";


const navlink = [
    {
        name:tabBar.List,
    },
    {
        name:tabBar.Board,
    },
    {
        name:tabBar.Calendar,
    },
    {
        name:tabBar.Files,
    }
]
const Childrenbodytask = () => {
    const [tab,setTab] = useState({});
    const switchComponent = (name:string) => {
        setTab(name)
    }
    return (
        <div className="childrenBodyTask">
            <Navbody navlink={navlink} switchs={switchComponent} />
            <Taskcontrol tab={tab} />
        </div>
    );
}

export default Childrenbodytask;
