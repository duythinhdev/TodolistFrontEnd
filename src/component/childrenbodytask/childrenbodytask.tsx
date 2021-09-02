import React, {useEffect, useState} from 'react';
import "./childrenbodytask.scss";
import Navbody from "../Navbody/navbody";
import Taskcontrol from "./taskcontrol/taskcontrol";
import {tabBar } from "./constant/constant";
import {useDispatch, useSelector} from "react-redux";


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
interface props {

}
const Childrenbodytask:React.FC<props> = ({}) => {
    const [tab,setTab] = useState({});
    const switchComponent = (name:string) => {
        setTab(name)
    }
    let isMenu: boolean = useSelector((state:any)=>state.main.isMenu);
    return (
        <div className={"childrenBodyTask " + (isMenu && "active")}>
            <Navbody navlink={navlink} switchs={switchComponent} />
            <Taskcontrol tab={tab} />
        </div>
    );
}

export default Childrenbodytask;
