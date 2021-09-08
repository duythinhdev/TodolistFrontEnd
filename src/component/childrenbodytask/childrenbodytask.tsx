import React, {useEffect, useState} from 'react';
import "./childrenbodytask.scss";
import Navbody from "../Navbody/navbody";
import Taskcontrol from "./taskcontrol/taskcontrol";
import {tabBar } from "./constant/constant";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/action";


interface props {

}
const Childrenbodytask:React.FC<props> = ({}) => {
    const [tab,setTab] = useState({});
    const switchComponent = (name:string) => {
        setTab(name)
    }
    let isMenu: boolean = useSelector((state:any)=>state.main.isMenu);
    let dispatch = useDispatch();
    useEffect(()=>{
        let actionIsTask =  actions.setTask(true);
        dispatch(actionIsTask);
        let actionIsHome =  actions.setHome(false);
        dispatch(actionIsHome);
    },[])
    return (
        <div className={"childrenBodyTask " + (isMenu && "active")}>
            <Navbody switchs={switchComponent} />
            <Taskcontrol tab={tab} />
        </div>
    );
}

export default Childrenbodytask;
