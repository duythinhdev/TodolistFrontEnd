import React, {useEffect, useState} from 'react';
import "./childrenbodyhome.scss";
import Navbody from "../Navbody/navbody";
import * as actions from "../../store/action/index"
import {useDispatch, useSelector} from "react-redux";
import Listhome from "./listHome/listhome";

const Childrenbodyhome = () => {
    const [tab,setTab] = useState({});
    const switchComponent = (name:string) => {
        setTab(name)
    }
    let dispatch = useDispatch();
    let isMenu: boolean = useSelector((state:any)=>state.main.isMenu);
    useEffect(()=>{
        let actionIsHome =  actions.setHome(true);
        dispatch(actionIsHome);
        let actionIsTask =  actions.setTask(false);
        dispatch(actionIsTask);
    },[])
    return (
        <div className={"container-childrenHome " + (isMenu && "active")}>
            <Navbody switchs={switchComponent}  />
            <Listhome />
        </div>
    );
}

export default Childrenbodyhome;
